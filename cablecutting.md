# Cable Cutting Calculator Funnel Idea

## Multi-Step Cable Cutting Assessment

### Step 1: Current Provider / Bill
Collect information such as:
- Current provider (Xfinity, DirecTV, Dish, etc.)
- Approximate monthly TV/internet bill
- Internet speed if known

---

### Step 2: What They Watch
Questions such as:
- Sports
- Local channels
- News
- Movies/TV shows
- Kids content
- Streaming services already used

Goal:
Determine what content is most important to keep.

---

### Step 3: House Size / Wi-Fi Issues
Questions such as:
- House size
- Number of floors
- Areas with buffering/dead zones
- Number of TVs/devices
- Current router setup (if known)

Goal:
Surface potential Wi-Fi/networking pain points.

---

### Step 4: Streaming Habits
Questions such as:
- Number of simultaneous streams
- Smart TVs vs Roku/Fire Stick/Apple TV
- Tech comfort level
- Current buffering/frustration points

Goal:
Understand setup complexity and overall user experience.

---

# Step 5: Results

Results should feel:
- personalized
- informative
- consultative
- useful without fully replacing a consultation

Examples:

> Based on your current setup, you may be able to reduce your monthly TV costs by approximately $X/month depending on sports and local channel requirements.

> A streaming-first setup combined with improved Wi-Fi coverage may provide a smoother and more reliable experience than traditional cable at a fraction of the cost.

Potential additional outputs:
- Potential Wi-Fi concerns
- Multi-TV streaming recommendations
- House size/network complexity observations
- Suggested streaming-first household setup
- Potential dead zone issues

Important:
Do NOT fully engineer their exact solution for free. The goal is to:
- diagnose
- educate
- build trust
- create curiosity
- encourage consultation

---

# Call To Action (CTA)

## Need Help Making the Switch?

Every home setup is a little different. We help evaluate your current setup, improve Wi-Fi coverage, eliminate buffering issues, and make the transition away from cable as smooth as possible.

### CTA Button Ideas
- Schedule Consultation
- Request Help
- Free Setup Review
- Talk to a Local Expert

---

# Potential Dynamic CTA Branching

## Heavy Sports Watcher
> Sports-heavy streaming setups can get complicated quickly. We can help make sure you keep the channels and games that matter most.

---

## Large House
> Larger homes often benefit from optimized Wi-Fi coverage before switching fully to streaming.

---

## Older / Less Tech-Savvy User
> We can also help simplify remotes, organize apps, and make the setup easier to use day-to-day.

---

# Consultation / Assessment Funnel

## CTA Button Flow
Results Page  
→ Consultation / Assessment Form  
→ Main Website Ecosystem  
→ Thank You / Follow-Up Page

---

# Consultation Form Goals

Keep the form:
- simple
- conversational
- low friction

**Database fields (matching API schema from cable-cutting.astro):**
- `service_type` - "cable_cutting" (hidden field)
- `first_name` - First name
- `last_name` - Last name  
- `email` - Email address
- `phone` - Phone number
- `address` - Street address
- `city` - City
- `zip_code` - ZIP code
- `description` - Package selection: "Free Consultation", "Complete Package ($349)", or "Antenna Only ($199)"

All fields are required. Form submits via POST to `https://api.milehightechrescue.com/booking` as JSON.

*Note: Additional cable-cutting specific fields (current_provider, monthly_bill, wifi_issues, etc.) are captured in the calculator UI but not yet part of the API schema. Consider adding these to the booking API if needed.*

---

# Thank You / Follow-Up Page

After form submission:
- Encourage exploring the rest of the website
- Link to:
  - Wi-Fi services
  - Smart home setup
  - Streaming setup
  - Networking help
  - Cable cutting services

Potential messaging:
> Thanks for reaching out! We'll review your setup information and get back to you shortly. In the meantime, feel free to explore additional services and resources that may help improve your home tech setup.

---

# Design Notes

- Keep consistent branding/colors with main website
- Maintain clean/simple/local feel
- Avoid overly corporate design
- Keep the experience approachable and consultative
- Prioritize mobile usability
- Make the tool feel personalized and intelligent