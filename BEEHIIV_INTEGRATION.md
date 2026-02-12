# Beehiiv Email Subscription Integration

## Overview
The email subscription form is now integrated with Beehiiv API v2 to automatically add subscribers to your publication.

## Setup

### 1. Environment Variables
Create a `.env` file in the `client` directory with your Beehiiv credentials:

```bash
BEEHIIV_API_KEY=your_actual_api_key
BEEHIIV_PUBLICATION_ID=your_actual_publication_id
```

### 2. Getting Your Credentials

**API Key:**
1. Go to https://app.beehiiv.com/settings/integrations
2. Create a new API key with "Write" permissions for subscriptions
3. Copy the key to your `.env` file

**Publication ID:**
1. Go to https://app.beehiiv.com/settings/publications
2. Copy your publication ID
3. Add it to your `.env` file

## How It Works

### Frontend (`EmailListSubscribe.astro`)
- User enters email address
- Form validates email format
- Shows loading state while submitting
- Displays success/error messages
- Clears form on successful subscription

### Backend (`/api/subscribe.ts`)
- Receives email from frontend
- Validates email format
- Calls Beehiiv API v2 endpoint
- Returns success or error response

### Beehiiv API Settings
The integration automatically:
- ✅ Sends welcome email to new subscribers
- ✅ Tracks UTM parameters (source: website, medium: organic)
- ✅ Handles duplicate email attempts gracefully
- ✅ Validates email addresses server-side

## Testing

### Local Testing
```bash
cd client
npm run dev
```

Then visit http://localhost:4321 and try subscribing with your email.

### Check Beehiiv Dashboard
After submission, verify in Beehiiv:
1. Go to https://app.beehiiv.com/subscribers
2. Look for the new subscriber
3. Check UTM parameters show "website" as source

## Error Handling

The integration handles:
- Invalid email formats
- Missing environment variables
- Network errors
- Duplicate subscriptions
- Beehiiv API errors

All errors are logged to console and shown to users with friendly messages.

## Customization

### Change Welcome Email Settings
Edit `client/src/pages/api/subscribe.ts`:
```typescript
send_welcome_email: true, // Set to false to disable
```

### Change UTM Tracking
Edit the UTM parameters in `subscribe.ts`:
```typescript
utm_source: 'website',
utm_medium: 'organic',
utm_campaign: 'homepage_signup',
```

### Reactivate Existing Subscribers
```typescript
reactivate_existing: false, // Set to true to reactivate unsubscribed emails
```

## Security Notes

- ✅ API key is stored server-side only (never exposed to browser)
- ✅ `.env` file is gitignored
- ✅ Email validation on both frontend and backend
- ✅ Rate limiting handled by Beehiiv

## Troubleshooting

### "Server configuration error"
- Check that `.env` file exists in `client` directory
- Verify `BEEHIIV_API_KEY` and `BEEHIIV_PUBLICATION_ID` are set
- Restart dev server after adding/changing `.env`

### "Failed to subscribe"
- Check Beehiiv dashboard for API key status
- Verify API key has "Write" permissions
- Check console for detailed error messages

### Email not appearing in Beehiiv
- Check spam/promotions folder for welcome email
- Verify publication ID is correct
- Check Beehiiv subscriber list (may take a few seconds)

## API Reference

**Beehiiv API v2 Documentation:**
https://developers.beehiiv.com/docs/v2/

**Endpoint Used:**
`POST https://api.beehiiv.com/v2/publications/{publication_id}/subscriptions`

## Support

If you encounter issues:
1. Check Beehiiv API status: https://status.beehiiv.com
2. Review Beehiiv docs: https://developers.beehiiv.com
3. Check console logs for detailed error messages

## Subscribe Modal Integration

The popup modal (`SubscribeModal.astro`) is now also integrated with the Beehiiv API.

### Features:
- ✅ Appears after configurable delay (default: 3 seconds)
- ✅ Submits to same `/api/subscribe` endpoint
- ✅ Shows loading spinner during submission
- ✅ Displays success/error messages
- ✅ Auto-closes after successful subscription
- ✅ Remembers dismissal for the session
- ✅ Fully mobile responsive
- ✅ Keyboard accessible (ESC to close)

### How It Works:
1. Modal opens after `delay` milliseconds (set in `RootLayout.astro`)
2. User enters email
3. Submits to Beehiiv API via `/api/subscribe`
4. Shows success message
5. Auto-closes after 2 seconds
6. Won't show again during that browser session

### Configuration:
In `RootLayout.astro`, you can change the delay:
```astro
<SubscribeModal delay={5000} /> <!-- 5 seconds -->
```

### Testing the Modal:
1. Visit the homepage
2. Wait 3 seconds (or configured delay)
3. Modal appears
4. Enter email and submit
5. Check Beehiiv dashboard for new subscriber

### Dismissal Behavior:
- Click "Maybe later" → Dismissed for session
- Click outside modal → Closes temporarily
- Press ESC → Closes temporarily
- Successfully subscribe → Dismissed for session

The modal uses `sessionStorage` so it will reappear on page refresh if the user clicked outside the modal (but not if they clicked "Maybe later" or successfully subscribed).
