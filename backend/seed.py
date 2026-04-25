import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from products.models import Product

def seed():
    if Product.objects.exists():
        print("Products already seeded.")
        return

    Product.objects.create(
        name="Ocean Master Chronograph",
        slug="ocean-master-chronograph",
        brand="Aether",
        collection="Deep Sea",
        description="A premium luxury automatic watch designed for deep-sea diving with exquisite craftsmanship. Features a stunning aqua dial.",
        price=12500.00,
        movement_type="Automatic Calibre 4500",
        case_material="Stainless Steel",
        strap_material="Stainless Steel",
        dial_color="Aqua Blue",
        water_resistance="300m",
        case_size="42mm",
        power_reserve="70 hours",
        stock=10,
        images=["/placeholder-watch-1.jpg"],
        featured=True
    )
    
    Product.objects.create(
        name="Celestial Tourbillon",
        slug="celestial-tourbillon",
        brand="Aether",
        collection="Astral",
        description="An intricate tourbillon movement visible through a sapphire crystal caseback, blending engineering and art.",
        price=45000.00,
        movement_type="Manual Winding Tourbillon",
        case_material="Platinum",
        strap_material="Alligator Leather",
        dial_color="Midnight Blue",
        water_resistance="50m",
        case_size="40mm",
        power_reserve="120 hours",
        stock=2,
        images=["/placeholder-watch-2.jpg"],
        featured=True
    )

    print("Successfully seeded products.")

if __name__ == '__main__':
    seed()
