import base64

with open(r'd:\ShawarmaLine\public\images\shawarma-line-avatar.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

svg_content = f'''<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="48" fill="#0E0E0E" stroke="#F97316" stroke-width="4" />
  <image href="data:image/png;base64,{b64}" x="6" y="6" width="88" height="88" />
</svg>'''

with open(r'd:\ShawarmaLine\public\favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print("favicon.svg generated!")
