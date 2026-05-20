# Cable Cutting Calculator Documentation

## Overview

The Cable Cutting Calculator is a multi-step assessment tool that helps users estimate their potential savings by switching from cable TV to streaming services. It collects information about the user's current setup, viewing preferences, home environment, and technical comfort level to provide personalized recommendations.

---

## How It Works

### Step 1: Current Provider & Bill
**What we collect:**
- Current TV provider (Xfinity, DirecTV, Dish, etc.)
- Monthly TV bill amount

**Why it matters:**
This establishes the baseline cost that the user is currently paying. The calculator uses this amount to compare against potential streaming costs.

**Tip for users:** Include all TV-related charges like box rental fees, DVR fees, regional sports fees, and premium channel subscriptions.

---

### Step 2: Content Preferences
**What we collect:**
- Sports viewing needs
- Local channel requirements
- Movies and TV shows consumption

**How it affects recommendations:**

| Content Type | Streaming Solution | Monthly Cost |
|--------------|-------------------|--------------|
| Sports | YouTube TV | $72.99 |
| Local Channels | YouTube TV or HD Antenna | $72.99 / Free |
| Movies/Shows | Netflix Standard | $15.49 |

**Savings Logic:**
- If user needs sports OR local channels: YouTube TV ($72.99)
- If user watches movies: Netflix ($15.49)
- If user only needs local channels: HD Antenna (one-time cost ~$50-200)

---

### Step 3: Home & Wi-Fi Assessment
**What we collect:**
- Home size (square footage)
- Wi-Fi dead zones
- Router age (optional)

**Wi-Fi Recommendations:**

| Home Size | Recommendation |
|-----------|----------------|
| Under 1,500 sq ft | Standard router should work |
| 1,500 - 2,500 sq ft | Consider Wi-Fi extender |
| 2,500+ sq ft | Mesh Wi-Fi system recommended |

**Why Wi-Fi matters:**
Streaming requires consistent internet. Buffering and dead zones are the #1 complaint after cutting cable. We assess this upfront to set proper expectations.

---

### Step 4: Streaming Habits
**What we collect:**
- Number of simultaneous streams needed
- Tech comfort level (beginner/intermediate/advanced)
- Existing streaming devices

**Impact on recommendations:**
- **Beginner users:** Recommend professional setup to avoid frustration
- **Large households:** May need higher internet speeds for multiple streams
- **No streaming devices:** Factor in cost of Roku/Fire TV (~$30-50)

---

### Step 5: Results & Savings Calculation

**The Math:**

```
Monthly Savings = Current TV Bill - New Streaming Costs

Example:
- Current TV Bill: $180/month
- YouTube TV: $72.99/month
- Netflix: $15.49/month
- Total Streaming: $88.48/month
- Monthly Savings: $180 - $88.48 = $91.52
- Yearly Savings: $1,098.24
```

**Important Notes:**
- Internet bill is NOT included in savings calculation (you keep internet either way)
- Existing streaming subscriptions are counted as ongoing costs
- One-time setup costs (antenna, streaming devices) are not factored into monthly savings

---

## Technical Implementation

### Architecture
The calculator is built as a **single-file Astro component** with:
- Client-side JavaScript for state management
- No server-side processing required
- All data persists in browser memory during the session

### State Management
```javascript
const state = {
  provider: '',      // Step 1
  tvBill: 0,         // Step 1
  content: [],     // Step 2 (sports, local, movies)
  houseSize: '',     // Step 3 (small, medium, large)
  deadZones: false,  // Step 3
  techLevel: '',     // Step 4 (beginner, intermediate, advanced)
  currentStep: 1     // Navigation
};
```

### Calculation Logic
```javascript
function calculateSavings() {
  let streamingCost = 0;
  
  // YouTube TV needed for sports or local channels
  if (state.content.includes('sports') || state.content.includes('local')) {
    streamingCost += 72.99;
  }
  
  // Netflix for movies/shows
  if (state.content.includes('movies')) {
    streamingCost += 15.49;
  }
  
  return Math.max(0, state.tvBill - streamingCost);
}
```

---

## Database Integration

### API Endpoint
Form submissions go to: `https://api.milehightechrescue.com/booking`

### Data Structure
```json
{
  "service_type": "cable_cutting_assessment",
  "first_name": "...",
  "last_name": "...",
  "email": "...",
  "phone": "...",
  "address": "...",
  "city": "...",
  "zip_code": "...",
  "description": "Package: Free Consultation",
  "assessment_data": "{...json string of all steps...}"
}
```

The `assessment_data` field contains a JSON string with all calculator responses for analysis.

---

## User Flow

1. **Landing** → See Step 1 (Provider/Bill)
2. **Continue** → Step 2 (Content)
3. **Continue** → Step 3 (House/Wi-Fi)
4. **Continue** → Step 4 (Habits)
5. **Continue** → Step 5 (Results)
6. **Schedule Consultation** → Submit form to booking API

---

## Edge Cases Handled

| Scenario | Handling |
|----------|----------|
| User enters $0 TV bill | Shows $0 savings (encourages accurate input) |
| No content selected | Shows minimal streaming cost (antenna only) |
| Large house + dead zones | Warns about Wi-Fi needs before cutting cable |
| Beginner tech level | Recommends professional setup |

---

## Browser Compatibility

- Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile, tablet, and desktop
- No external JavaScript dependencies (vanilla JS only)

---

## Future Enhancements

Potential improvements to consider:
- **Local storage:** Save progress if user refreshes
- **More streaming services:** Add Hulu, Disney+, Max pricing
- **Internet speed calculator:** Recommend minimum speeds based on usage
- **ROI timeline:** Show break-even point including setup costs
- **A/B testing:** Test different step orders or question phrasing

---

## Support

For technical issues with the calculator:
1. Check browser console for JavaScript errors
2. Verify all form fields are filled before submission
3. Ensure JavaScript is enabled in browser

For questions about cable cutting services:
- Schedule a free consultation through the calculator
- Call: [Your Phone Number]
- Email: [Your Email]

---

*Last updated: 2026-05-20*
