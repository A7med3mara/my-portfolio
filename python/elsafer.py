import turtle
import math

t = turtle.Turtle()
t.speed(0)
t.color("deeppink")
turtle.bgcolor("black")

for i in range(360):
    t.goto(0, 0)
    x = 16 * math.sin(i)**3
    y = 13 * math.cos(i) - 5 * math.cos(2*i) - 2*math.cos(3*i) - math.cos(4*i)
    t.goto(x*15, y*15)

turtle.done()