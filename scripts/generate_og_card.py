import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630

# Create base canvas with dark gourmet gradient
card = Image.new('RGB', (W, H), (14, 14, 18))

# Background radial warm amber glow
glow = Image.new('RGB', (W, H), (14, 14, 18))
draw_glow = ImageDraw.Draw(glow)
draw_glow.ellipse([650, -100, 1450, 750], fill=(80, 32, 10))
draw_glow.ellipse([750, 20, 1350, 620], fill=(130, 55, 12))
draw_glow.ellipse([850, 120, 1250, 520], fill=(180, 80, 15))
glow = glow.filter(ImageFilter.GaussianBlur(70))
card = Image.blend(card, glow, 0.75)

# Load food image
food_path = 'public/images/easy-cheesy/burger-smash-cut.png'
if os.path.exists(food_path):
    food = Image.open(food_path).convert('RGBA')
    # Resize keeping aspect ratio
    food.thumbnail((540, 540), Image.Resampling.LANCZOS)
    # Add a subtle drop shadow under the burger
    shadow = Image.new('RGBA', (food.width + 40, food.height + 40), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.ellipse([20, 20, food.width + 20, food.height + 20], fill=(0, 0, 0, 160))
    shadow = shadow.filter(ImageFilter.GaussianBlur(25))
    
    fx = W - food.width - 50
    fy = (H - food.height) // 2
    card.paste(shadow, (fx - 20, fy - 20), shadow)
    card.paste(food, (fx, fy), food)

# Fonts
font_brand = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', 52)
font_tagline = ImageFont.truetype('C:\\Windows\\Fonts\\segoeui.ttf', 24)
font_pill = ImageFont.truetype('C:\\Windows\\Fonts\\segoeuib.ttf', 19)
font_body = ImageFont.truetype('C:\\Windows\\Fonts\\segoeui.ttf', 21)
font_phone = ImageFont.truetype('C:\\Windows\\Fonts\\arialbd.ttf', 24)

draw = ImageDraw.Draw(card)

# Badge 1: Brand badge
draw.rounded_rectangle([60, 55, 250, 95], radius=10, fill=(245, 158, 11))
draw.text((75, 63), "EASY CHEESY", font=font_pill, fill=(0, 0, 0))

# Badge 2: Rating
draw.rounded_rectangle([265, 55, 475, 95], radius=10, fill=(35, 35, 45), outline=(70, 70, 85), width=1)
draw.text((280, 63), "4.1 ★ (270+ Reviews)", font=font_pill, fill=(255, 255, 255))

# Badge 3: Timing
draw.rounded_rectangle([490, 55, 665, 95], radius=10, fill=(220, 38, 38))
draw.text((505, 63), "OPEN TILL 2 AM", font=font_pill, fill=(255, 255, 255))

# Main Headings
draw.text((60, 130), "KASUR'S FAVORITE", font=font_brand, fill=(255, 255, 255))
draw.text((60, 195), "SMASH BURGERS", font=font_brand, fill=(245, 158, 11))
draw.text((60, 260), "& CROWN PIZZAS", font=font_brand, fill=(255, 255, 255))

# Tagline
draw.text((60, 335), "Serving Moments, Not Just Meals", font=font_tagline, fill=(200, 200, 215))

# Menu items box
draw.rounded_rectangle([60, 385, 665, 435], radius=10, fill=(26, 26, 33), outline=(60, 60, 75), width=1)
draw.text((80, 396), "Smash Burgers  |  Crown Crust Pizza  |  Injected Broast", font=font_body, fill=(240, 240, 245))

# Location box
draw.rounded_rectangle([60, 450, 665, 500], radius=10, fill=(26, 26, 33), outline=(60, 60, 75), width=1)
draw.text((80, 461), "Shahbaz Khan Road, Kasur  |  Dine-in  •  Takeaway  •  Delivery", font=font_body, fill=(250, 204, 21))

# Contact button / WhatsApp
draw.rounded_rectangle([60, 520, 440, 575], radius=12, fill=(34, 197, 94))
draw.text((85, 532), "WhatsApp: 0327-4343999", font=font_phone, fill=(0, 0, 0))

# Save optimized images
os.makedirs('public', exist_ok=True)
card.save('public/og-fastfood.jpg', 'JPEG', quality=88, optimize=True)
card.save('public/og-image.jpg', 'JPEG', quality=88, optimize=True)
print("Generated og-fastfood.jpg size:", os.path.getsize('public/og-fastfood.jpg'), "bytes")
