import pygame  
pygame.init()  
size = 500, 500  
screen = pygame.display.set_mode(size)  
pygame.display.set_caption('game')  
running = True  # 更改变量名使其更清晰  
while running:
    for event in pygame.event.get():  
        if event.type == pygame.QUIT:  
            running = False  
    screen.fill((0, 0, 0))  # 填充黑色背景（可选）  
    pygame.display.update()
pygame.quit()