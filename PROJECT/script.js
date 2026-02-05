import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

/* ==================== 1. منطق واجهة المستخدم (UI Logic) ==================== */

// تعريف الدوال في الـ window عشان نقدر ننادي عليها من الـ HTML
window.handleLogin = function() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('login-error');

    if (user === "elsafer" && pass === "2004") {
        document.getElementById('login-screen').classList.add('hidden');
        setTimeout(() => {
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('main-screen').classList.remove('hidden');
        }, 1000);
    } else {
        errorMsg.style.display = 'block';
        const box = document.querySelector('.glass-box');
        box.style.transform = 'translateX(10px)';
        setTimeout(() => box.style.transform = 'translateX(0)', 100);
    }
};

window.openDonationCheck = function() {
    document.getElementById('donation-modal').classList.remove('hidden');
    resetQuiz();
};

window.closeModal = function() {
    document.getElementById('donation-modal').classList.add('hidden');
};

window.nextStep = function(stepId) {
    document.querySelectorAll('.quiz-step').forEach(el => el.classList.remove('active'));
    
    if (stepId === 'finish') {
        document.getElementById('step-finish').classList.add('active');
    } else {
        document.getElementById('step-' + stepId).classList.add('active');
    }
};

window.showReject = function(reason) {
    document.querySelectorAll('.quiz-step').forEach(el => el.classList.remove('active'));
    document.getElementById('step-reject').classList.add('active');
    document.getElementById('reject-reason').innerText = reason;
};

function resetQuiz() {
    document.querySelectorAll('.quiz-step').forEach(el => el.classList.remove('active'));
    document.getElementById('step-1').classList.add('active');
}

/* ==================== 2. منطق الجرافيك (Three.js 3D) ==================== */

// إعداد المشهد
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050000, 0.035);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ReinhardToneMapping;
document.body.appendChild(renderer.domElement);

// إعدادات الـ Bloom (التوهج)
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
bloomPass.threshold = 0.1;
bloomPass.strength = 1.2;
bloomPass.radius = 0.5;

const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);

// الإضاءة
const ambientLight = new THREE.AmbientLight(0x000000);
scene.add(ambientLight);
const backLight = new THREE.PointLight(0xff0000, 10, 50); 
backLight.position.set(0, 0, -5);
scene.add(backLight);
const rimLight = new THREE.DirectionalLight(0x4444ff, 2);
rimLight.position.set(-5, 5, 2);
scene.add(rimLight);

// إنشاء الخلايا
const cells = [];
const cellGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const cellMaterial = new THREE.MeshStandardMaterial({
    color: 0x880000, emissive: 0x220000, roughness: 0.1, metalness: 0.5
});

for (let i = 0; i < 40; i++) {
    const cell = new THREE.Mesh(cellGeometry, cellMaterial);
    const angle = Math.random() * Math.PI * 2;
    const radius = 4 + Math.random() * 10;
    cell.position.x = Math.cos(angle) * radius;
    cell.position.y = Math.sin(angle) * radius * 0.7; 
    cell.position.z = (Math.random() - 0.5) * 15;
    cell.scale.set(1, 1, 0.3);
    cell.rotation.x = Math.random() * Math.PI;
    cell.rotation.z = Math.random() * Math.PI;
    scene.add(cell);
    cells.push({ 
        mesh: cell, 
        initialPos: cell.position.clone(), 
        speed: Math.random() * 0.002 + 0.001, 
        rotSpeed: Math.random() * 0.01, 
        floatOffset: Math.random() * Math.PI * 2 
    });
}

// التفاعل مع الماوس
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
    mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
});

// حلقة التحريك (Animation Loop)
const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();
    
    cells.forEach((item, i) => {
        item.mesh.rotation.x += item.rotSpeed;
        item.mesh.rotation.y += item.rotSpeed;
        item.mesh.position.y = item.initialPos.y + Math.sin(elapsedTime * 0.5 + item.floatOffset) * 0.5;
    });

    camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);

    composer.render();
}
animate();

// تعديل حجم الشاشة
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
});