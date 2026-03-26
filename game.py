import turtle
import random


colour = ['red','blue','brown','gray','green']
y = 0
p = turtle.Pen()
p.speed(0)
p.penup()
p.goto((-300),0)
p.pendown()
p.pensize(5)
for x in range((-300), 300, 5):
    p.pencolor(colour[random.randint(0,4)])
    a = random.randint((-10), 10)
    y += a
    p.goto(x,y)
turtle.done()