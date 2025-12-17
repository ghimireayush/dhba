# DHBA Project - User Stories

**Date:** December 17, 2025  
**Project:** District Hotel Business Association Kathmandu (DHBA) Website  
**Document:** Complete User Stories for All Features

---

## 📋 User Story Format

```
US-ID: [Story ID]
Title: [Feature Title]
Priority: [Critical/High/Medium/Low]
Effort: [1/2/3/5/8/13 story points]
Status: [To Do/In Progress/Done]

As a [user role]
I want to [action/feature]
So that [benefit/business value]

Acceptance Criteria:
- [ ] AC1
- [ ] AC2
- [ ] AC3

Definition of Done:
- Code written and tested
- Code reviewed
- Acceptance criteria met
- Documentation updated
- Deployed to staging
```

---

# PUBLIC USER STORIES

## US-001: View Homepage with Brand Information
**Priority:** Critical | **Effort:** 3 | **Status:** Done

**As a** new visitor  
**I want to** see a compelling homepage with key information about DHBA  
**So that** I understand the organization's purpose and offerings

**Acceptance Criteria:**
- [ ] Hero section displays with animated background
- [ ] Hero section shows business card ticker with 8 promotional items
- [ ] Hero carousel auto-rotates every 6 seconds
- [ ] Carousel pause on hover functionality works
- [ ] Statistics section shows 4 key metrics with animated counters
- [ ] About preview section links to full about page
- [ ] Contact info section displays with phone numbers and email
- [ ] Featured section shows hotels, events, news, members
- [ ] Central committee displays top 5 leadership members
- [ ] News section shows latest 3-5 articles
- [ ] Newsletter signup form is visible
- [ ] Page responsive on mobile, tablet, desktop
- [ ] All links are functional

**Notes:**
- Hero section uses Framer Motion animations
- Maps library is lazy loaded
- Scroll progress indicator visible

---

## US-002: Search for Hotels by Name or Keyword
**Priority:** High | **Effort:** 3 | **Status:** Done

**As a** traveler or hotel seeker  
**I want to** search hotels by name or keyword  
**So that** I can quickly find the specific hotel I'm looking for

**Acceptance Criteria:**
- [ ] Search input accepts text
- [ ] Search updates results in real-time as I type
- [ ] Results display hotels matching the search term
- [ ] Search is case-insensitive
- [ ] Special characters are handled correctly
- [ ] Empty search shows all hotels
- [ ] Search results update hotel grid immediately
- [ ] Search term persists in input field

**Notes:**
- Frontend-only search (future: add backend search API)
- Mock data used for demonstration

---

## US-003: Filter Hotels by Location
**Priority:** High | **Effort:** 2 | **Status:** Done

**As a** hotel searcher  
**I want to** filter hotels by location  
**So that** I can find hotels in my preferred area

**Acceptance Criteria:**
- [ ] Location filter dropdown displays 5 location options
- [ ] Options: Thamel, Kathmandu Center, Bhaktapur, Patan, Other
- [ ] Selecting a location filters hotel results
- [ ] Multiple location filters can be combined
- [ ] "All Locations" option resets filter
- [ ] Current selection highlighted in dropdown
- [ ] Filter updates results immediately

**Notes:**
- Locations based on real Kathmandu geography

---

## US-004: Filter Hotels by Star Rating
**Priority:** High | **Effort:** 2 | **Status:** Done

**As a** hotel searcher  
**I want to** filter hotels by star rating  
**So that** I can find hotels matching my quality expectations

**Acceptance Criteria:**
- [ ] Star rating filter shows 5 options (5, 4, 3, 2, 1 stars)
- [ ] Selecting a rating shows "X Stars & Up"
- [ ] Only hotels with that rating or higher display
- [ ] "All Ratings" option shows all hotels
- [ ] Radio button selection works properly
- [ ] Filter combines with other active filters

**Notes:**
- "Stars & Up" logic ensures higher-rated hotels always match

---

## US-005: Filter Hotels by Type
**Priority:** Medium | **Effort:** 2 | **Status:** Done

**As a** hotel searcher  
**I want to** filter by hotel type  
**So that** I can find accommodation matching my preference

**Acceptance Criteria:**
- [ ] Hotel type filter shows 4 options
- [ ] Options: Hotel, Guesthouse, Resort, Boutique Hotel
- [ ] Selecting type filters results accordingly
- [ ] "All Types" shows all hotels
- [ ] Filter combines with other filters
- [ ] Clear visual indication of selected type

**Notes:**
- Types reflect real Kathmandu accommodation landscape

---

## US-006: View Hotel Details
**Priority:** High | **Effort:** 5 | **Status:** To Do

**As a** prospective guest  
**I want to** view detailed information about a specific hotel  
**So that** I can decide if it meets my needs

**Acceptance Criteria:**
- [ ] Hotel detail page shows all information
- [ ] Hotel name, description, images displayed
- [ ] Location map shows exact hotel position
- [ ] Amenities clearly listed with icons
- [ ] Room types and pricing information visible
- [ ] Contact information prominent
- [ ] Related hotels suggested
- [ ] "Find hotels nearby" functionality works
- [ ] Page loads quickly

**Notes:**
- Requires dynamic route `/hotels/[id]`
- Future: booking integration

---

## US-007: Switch Between Grid and Map View
**Priority:** Medium | **Effort:** 3 | **Status:** Done

**As a** hotel searcher  
**I want to** toggle between grid and map view of hotels  
**So that** I can see hotels visually on a map or in a list

**Acceptance Criteria:**
- [ ] Grid view button switches to grid layout
- [ ] Map view button shows interactive map
- [ ] All hotels visible on map with markers
- [ ] Click marker to see hotel preview
- [ ] Filters persist when switching views
- [ ] View preference remembered (optional)
- [ ] Both views responsive on mobile

**Notes:**
- Uses Leaflet library
- Map is lazy loaded for performance

---

## US-008: Browse Tourist Destinations
**Priority:** High | **Effort:** 3 | **Status:** Done

**As a** tourist  
**I want to** browse tourist destinations around Kathmandu  
**So that** I can plan activities during my visit

**Acceptance Criteria:**
- [ ] Destination grid displays with images
- [ ] Each card shows: name, description, category, distance
- [ ] Click destination to view details
- [ ] Destination detail page fully loads
- [ ] Related destinations suggested
- [ ] Nearby hotels recommended
- [ ] Location displayed on map

**Notes:**
- Includes 20+ tourist destinations
- Links to hotels in that area

---

## US-009: Discover Upcoming Events
**Priority:** High | **Effort:** 3 | **Status:** Done

**As a** industry professional  
**I want to** discover upcoming DHBA events  
**So that** I can plan attendance and register

**Acceptance Criteria:**
- [ ] Events page displays upcoming events in grid
- [ ] Event cards show: title, date, time, location, attendee count
- [ ] RSVP button visible on each card
- [ ] Click event to view full details
- [ ] Event calendar view available
- [ ] Filter by category, date, location
- [ ] Map shows event location
- [ ] Related events suggested

**Notes:**
- Future: Event registration and payment integration
- Future: ICS/calendar export

---

## US-010: View Event Details and RSVP
**Priority:** High | **Effort:** 5 | **Status:** To Do

**As a** event attendee  
**I want to** see complete event details and RSVP to attend  
**So that** I can confirm my attendance and get updates

**Acceptance Criteria:**
- [ ] Event detail page shows all information
- [ ] Full description, agenda, speakers displayed
- [ ] Date, time, location, capacity information visible
- [ ] RSVP button prominent and functional
- [ ] Member login required for RSVP
- [ ] RSVP confirmation email sent
- [ ] Attendance count updates
- [ ] Can cancel RSVP
- [ ] Related events suggested

**Notes:**
- Requires member authentication
- Future: calendar integration
- Future: event reminders

---

## US-011: Browse Photo Gallery
**Priority:** Medium | **Effort:** 3 | **Status:** Done

**As a** visitor  
**I want to** view photos from DHBA events and member hotels  
**So that** I can see the organization and community in action

**Acceptance Criteria:**
- [ ] Photo gallery grid displays thumbnails
- [ ] Click photo to open lightbox/modal
- [ ] Full-screen viewing option
- [ ] Navigation between photos
- [ ] Photo metadata visible (date, event, photographer)
- [ ] Download option available
- [ ] Related photos suggested
- [ ] Filter by event, month, category

**Notes:**
- 100+ photos available
- Lightbox library for modal viewing

---

## US-012: Watch Videos
**Priority:** Medium | **Effort:** 2 | **Status:** Done

**As a** visitor  
**I want to** watch videos of DHBA events and tutorials  
**So that** I can see visual content and learn more

**Acceptance Criteria:**
- [ ] Video gallery displays with thumbnails
- [ ] Click video to open player
- [ ] Video plays smoothly
- [ ] Duration displayed
- [ ] View count visible
- [ ] Related videos suggested
- [ ] Share button available

**Notes:**
- 20+ videos available
- Embedded or hosted videos

---

## US-013: Search Member Organizations
**Priority:** Medium | **Effort:** 2 | **Status:** Done

**As a** business partner  
**I want to** search for member organizations by name  
**So that** I can find specific members

**Acceptance Criteria:**
- [ ] Members page has search input
- [ ] Search by organization name
- [ ] Results display matching members
- [ ] Real-time search feedback
- [ ] Click member to view profile
- [ ] Member contact information visible

**Notes:**
- Future: advanced search filters

---

## US-014: Contact DHBA
**Priority:** High | **Effort:** 3 | **Status:** Done

**As a** visitor  
**I want to** contact DHBA with inquiries or feedback  
**So that** I can get support or share information

**Acceptance Criteria:**
- [ ] Contact form displays all required fields
- [ ] Fields: name, organization, email, subject, message
- [ ] Validation: required fields, email format
- [ ] Form submission successful
- [ ] Confirmation message displayed
- [ ] Email sent to admin
- [ ] Confirmation email sent to user
- [ ] Form clears after submission
- [ ] Contact information visible
- [ ] Office location shown on map

**Notes:**
- Requires email service integration
- Future: CRM integration

---

## US-015: Switch Language
**Priority:** Medium | **Effort:** 2 | **Status:** Done

**As a** Nepali-speaking visitor  
**I want to** switch the website to Nepali language  
**So that** I can understand content in my preferred language

**Acceptance Criteria:**
- [ ] Language toggle in header navigation
- [ ] Options: English, Nepali
- [ ] All page content translates
- [ ] Preference persists (localStorage)
- [ ] Navigation items translated
- [ ] Form labels translated
- [ ] Error messages translated
- [ ] Page reloads with new language

**Notes:**
- 160+ translation keys implemented
- Support for English and Nepali (नेपाली)
- Future: support for more languages

---

## US-016: Toggle Dark/Light Theme
**Priority:** Low | **Effort:** 2 | **Status:** Done

**As a** user  
**I want to** toggle between dark and light themes  
**So that** I can use the website comfortably in any lighting

**Acceptance Criteria:**
- [ ] Theme toggle in header
- [ ] Dark mode darkens all elements
- [ ] Light mode brightens all elements
- [ ] Preference persists
- [ ] System preference detection works
- [ ] All components properly themed
- [ ] Good contrast in both themes
- [ ] Images visible in both themes

**Notes:**
- Uses next-themes library
- System preference auto-detection

---

## US-017: Read About DHBA
**Priority:** Medium | **Effort:** 2 | **Status:** Done

**As a** organization inquirer  
**I want to** learn detailed information about DHBA  
**So that** I understand the organization's mission and structure

**Acceptance Criteria:**
- [ ] About page loads with complete information
- [ ] Mission statement displayed
- [ ] Vision statement displayed
- [ ] History and milestones shown
- [ ] Leadership team listed with positions
- [ ] Leadership phone numbers clickable (tel: links)
- [ ] General members listed
- [ ] Member associations information shown
- [ ] All 16 leadership positions displayed
- [ ] Call-to-action to join DHBA

**Notes:**
- 16 leadership positions + 13 general members
- All contact information verified

---

## US-018: View Resource Library
**Priority:** Medium | **Effort:** 3 | **Status:** Done

**As a** member seeking knowledge  
**I want to** access training materials and industry guides  
**So that** I can upskill and learn best practices

**Acceptance Criteria:**
- [ ] Resources page displays all materials
- [ ] Search by title or keyword
- [ ] Filter by category, type, difficulty
- [ ] Resource cards show: title, description, category
- [ ] Download button available
- [ ] View count visible
- [ ] Date published visible
- [ ] Related resources suggested
- [ ] Blog section shows articles

**Notes:**
- 20+ resources available
- 10+ blog posts
- Future: member access tracking

---

## US-019: Read Blog Articles
**Priority:** Medium | **Effort:** 2 | **Status:** Done

**As a** industry professional  
**I want to** read blog articles on hospitality topics  
**So that** I can stay informed on industry trends

**Acceptance Criteria:**
- [ ] Blog list shows all articles
- [ ] Each article shows: title, image, author, date, excerpt
- [ ] Click article to read full content
- [ ] Article date and author displayed
- [ ] Related articles suggested
- [ ] Share buttons available
- [ ] Comments section (future)
- [ ] Search functionality works

**Notes:**
- 10+ articles available
- Future: newsletter subscription

---

## US-020: Browse Job Listings
**Priority:** High | **Effort:** 3 | **Status:** Done

**As a** job seeker  
**I want to** browse available job positions  
**So that** I can find employment opportunities

**Acceptance Criteria:**
- [ ] Careers page displays job listings in grid
- [ ] Each job card shows: title, organization, location, type, salary
- [ ] Search by job title or keyword
- [ ] Filter by location, job type, experience level
- [ ] Click job to view full description
- [ ] Application deadline visible
- [ ] "Apply now" button visible
- [ ] Related jobs suggested

**Notes:**
- 15+ job postings available
- Job types: Full-time, Part-time, Contract
- Future: applicant tracking

---

## US-021: Apply for Job
**Priority:** High | **Effort:** 5 | **Status:** To Do

**As a** job applicant  
**I want to** apply for a job position  
**So that** I can submit my candidacy

**Acceptance Criteria:**
- [ ] Application form displays all fields
- [ ] Name, email, phone, resume upload required
- [ ] Cover letter optional
- [ ] Resume upload accepts PDF, DOC
- [ ] Form validation works
- [ ] Submit button functional
- [ ] Confirmation message displayed
- [ ] Confirmation email sent to applicant
- [ ] Application stored in system
- [ ] Employer notified

**Notes:**
- Requires file storage integration
- Future: application tracking system
- Future: status updates to applicant

---

---

# AUTHENTICATION & ACCOUNT USER STORIES

## US-022: Admin Login
**Priority:** Critical | **Effort:** 5 | **Status:** To Do

**As an** DHBA administrator  
**I want to** login to access admin dashboard  
**So that** I can manage site content and members

**Acceptance Criteria:**
- [ ] Login page displays email and password fields
- [ ] Demo credentials work (admin@dhba.com / admin123)
- [ ] Validation: email format, password required
- [ ] Submit button functional
- [ ] Loading state displayed during auth
- [ ] Success: redirect to admin dashboard
- [ ] Failure: error message displayed
- [ ] "Forgot password" link available
- [ ] "Sign up" link available
- [ ] Auto-redirect after 3 seconds (success)
- [ ] JWT token generated and stored
- [ ] Secure session management

**Notes:**
- Replace demo credentials with real auth
- Implement rate limiting
- Add 2FA (future)

---

## US-023: Member Login
**Priority:** Critical | **Effort:** 5 | **Status:** To Do

**As a** DHBA member  
**I want to** login to access my member portal  
**So that** I can access member-only features

**Acceptance Criteria:**
- [ ] Login page with member option selected
- [ ] Demo credentials work (member@hotel.com / member123)
- [ ] Email and password validation
- [ ] Submit button works
- [ ] Success: redirect to member dashboard
- [ ] Failure: error message shown
- [ ] Auto-redirect after 3 seconds
- [ ] Remember me checkbox (optional)
- [ ] JWT token generated
- [ ] Session persists across browser refresh

**Notes:**
- Same login page, different redirect
- Future: single sign-on
- Future: social login

---

## US-024: New Organization Registration
**Priority:** High | **Effort:** 8 | **Status:** To Do

**As a** hotel owner  
**I want to** register my organization to become a DHBA member  
**So that** I can access member benefits and networking

**Acceptance Criteria:**
- [ ] Sign up page displays multi-step form
- [ ] Step 1: Organization information
  - [ ] Organization name required
  - [ ] Organization type (select dropdown)
  - [ ] Registration number required
  - [ ] Address, location, postal code
- [ ] Step 2: Contact information
  - [ ] Primary contact name
  - [ ] Position/title
  - [ ] Email, phone
- [ ] Step 3: Account credentials
  - [ ] Username creation
  - [ ] Password with strength indicator
  - [ ] Confirm password
  - [ ] Password requirements shown
- [ ] Step 4: Review and submit
  - [ ] Summary of all entered data
  - [ ] Terms of service checkbox
  - [ ] Privacy policy checkbox
- [ ] Form validation on each step
- [ ] Success: confirmation message
- [ ] Email sent to user
- [ ] Email sent to admin for approval
- [ ] Redirect to login page
- [ ] Account marked as pending (admin approval)

**Notes:**
- Multi-step form for better UX
- Email verification required (future)
- Admin approval workflow (future)
- Payment/subscription setup (future)

---

## US-025: Reset Forgotten Password
**Priority:** High | **Effort:** 5 | **Status:** To Do

**As a** user who forgot password  
**I want to** reset my password securely  
**So that** I can regain access to my account

**Acceptance Criteria:**
- [ ] Forgot password page displays email input
- [ ] Email field validated
- [ ] Submit button sends reset email
- [ ] Confirmation message shown
- [ ] Reset email sent with token link
- [ ] Reset link valid for 24 hours
- [ ] Click reset link opens password form
- [ ] New password required
- [ ] Confirm password required
- [ ] Password strength validation
- [ ] Cannot use previous password
- [ ] Success: password updated
- [ ] Auto-redirect to login
- [ ] Confirmation email sent

**Notes:**
- Token must be secure and unique
- One-time use only
- Rate limiting on requests
- No account enumeration

---

## US-026: Logout
**Priority:** High | **Effort:** 2 | **Status:** Done

**As a** logged-in user  
**I want to** logout of my account  
**So that** I can securely end my session

**Acceptance Criteria:**
- [ ] Logout button visible in dashboard
- [ ] Click logout clears session
- [ ] JWT token removed from storage
- [ ] Redirect to homepage
- [ ] Cannot access protected pages after logout
- [ ] Session expires if inactive (future)

**Notes:**
- Immediate logout
- Future: session timeout

---

---

# MEMBER PORTAL USER STORIES

## US-027: View Member Dashboard
**Priority:** High | **Effort:** 8 | **Status:** To Do

**As a** DHBA member  
**I want to** access my personalized member dashboard  
**So that** I can manage my profile, jobs, events, and connections

**Acceptance Criteria:**
- [ ] Dashboard loads after login
- [ ] Greeting with member name displayed
- [ ] Quick stats visible (profile %, events, messages)
- [ ] Quick action buttons displayed
- [ ] Navigation tabs: Profile, Jobs, Events, Resources, Network, Messages, Settings
- [ ] All sections accessible from tabs
- [ ] Profile information complete indicator
- [ ] Mobile responsive layout
- [ ] Dark/light theme support

**Notes:**
- Hub for all member activities
- Future: personalized recommendations

---

## US-028: Manage Member Profile
**Priority:** High | **Effort:** 5 | **Status:** To Do

**As a** member  
**I want to** update my profile information  
**So that** other members can learn about my organization

**Acceptance Criteria:**
- [ ] Profile section displays current information
- [ ] Edit button opens profile form
- [ ] Fields: organization name, bio, website, social media, achievements
- [ ] Photo upload available
- [ ] Profile photo displays with fallback
- [ ] Contact information editable
- [ ] Save changes button works
- [ ] Success message shown
- [ ] Changes persist across sessions
- [ ] Profile completeness percentage shown

**Notes:**
- Avatar upload to cloud storage (future)
- Profile verification (future)

---

## US-029: Post Job Opening
**Priority:** High | **Effort:** 5 | **Status:** To Do

**As a** member  
**I want to** post job openings for my organization  
**So that** I can recruit qualified candidates

**Acceptance Criteria:**
- [ ] Jobs tab displays my posted jobs
- [ ] "Create new job" button opens form
- [ ] Form fields: title, description, requirements, responsibilities
- [ ] Job type select: Full-time, Part-time, Contract
- [ ] Salary range input (optional)
- [ ] Application deadline date picker
- [ ] Save as draft or publish
- [ ] Posted jobs display in grid
- [ ] View applications button
- [ ] Edit job button
- [ ] Delete job with confirmation
- [ ] Job appears in public job listings

**Notes:**
- Public job listings page
- Future: featured job promotion
- Future: analytics on job views

---

## US-030: View Job Applications
**Priority:** High | **Effort:** 5 | **Status:** To Do

**As a** member with job posting  
**I want to** view and manage applications received  
**So that** I can evaluate candidates and make hiring decisions

**Acceptance Criteria:**
- [ ] View applicants button on each job
- [ ] Applicants list displays: name, email, resume
- [ ] Click applicant to view full application
- [ ] View resume file
- [ ] View cover letter if provided
- [ ] Contact applicant via email
- [ ] Mark as shortlisted
- [ ] Mark as rejected
- [ ] Status tracking for each applicant
- [ ] Search/filter applicants
- [ ] Export applicant list

**Notes:**
- Applicant tracking system (future)
- Bulk email functionality (future)

---

## US-031: RSVP to Events
**Priority:** High | **Effort:** 3 | **Status:** To Do

**As a** member  
**I want to** RSVP to upcoming DHBA events  
**So that** I can confirm my attendance

**Acceptance Criteria:**
- [ ] Events section shows upcoming events
- [ ] RSVP button on each event
- [ ] Click RSVP confirms attendance
- [ ] Success message displayed
- [ ] RSVP'd events marked as attended
- [ ] Can cancel RSVP
- [ ] Confirmation email sent
- [ ] Event appears on member calendar
- [ ] Reminder emails sent before event

**Notes:**
- Integration with calendar (future)
- Ical export (future)

---

## US-032: View Resources & Training Materials
**Priority:** Medium | **Effort:** 3 | **Status:** To Do

**As a** member  
**I want to** access training resources and educational materials  
**So that** I can learn and improve my skills

**Acceptance Criteria:**
- [ ] Resources tab displays available materials
- [ ] Search by title or keyword
- [ ] Filter by category, difficulty, type
- [ ] Each resource shows: title, description, category
- [ ] Download button available
- [ ] Access tracked (view count)
- [ ] Resources bookmarked
- [ ] Bookmark list accessible
- [ ] Related resources suggested
- [ ] PDF viewer for documents

**Notes:**
- Access tracking recorded
- Future: personalized recommendations
- Future: completion certificates

---

## US-033: Network with Other Members
**Priority:** Medium | **Effort:** 5 | **Status:** To Do

**As a** member  
**I want to** connect with other members  
**So that** I can build professional relationships

**Acceptance Criteria:**
- [ ] Network section displays other members
- [ ] Search member directory
- [ ] Member profiles viewable
- [ ] "Connect" button sends request
- [ ] Connection requests visible
- [ ] Accept/reject requests
- [ ] Connected members list
- [ ] Message connected members
- [ ] Remove connection option
- [ ] Connection status clear

**Notes:**
- Relationship verification (future)
- Recommendations engine (future)

---

## US-034: Send Messages to Members
**Priority:** Medium | **Effort:** 5 | **Status:** To Do

**As a** member  
**I want to** send messages to other members  
**So that** I can communicate and network

**Acceptance Criteria:**
- [ ] Messages section displays inbox
- [ ] Received messages listed
- [ ] Sent messages folder
- [ ] Click message to read full content
- [ ] Compose button opens new message form
- [ ] Recipient selection (connected members)
- [ ] Message content input
- [ ] Send button functional
- [ ] Confirmation of send
- [ ] Delete message option
- [ ] Mark as read/unread
- [ ] Unread message count badge

**Notes:**
- Future: real-time messaging
- Future: notifications

---

## US-035: Manage Notification Preferences
**Priority:** Low | **Effort:** 3 | **Status:** To Do

**As a** member  
**I want to** configure which notifications I receive  
**So that** I'm not overwhelmed with emails

**Acceptance Criteria:**
- [ ] Settings section has notification preferences
- [ ] Checkboxes for: new messages, events, connections, jobs, updates
- [ ] Toggle all notifications on/off
- [ ] Frequency options: immediate, daily digest, weekly
- [ ] Save preferences
- [ ] Success confirmation
- [ ] Preferences persist
- [ ] Default settings reasonable

**Notes:**
- Future: SMS notifications
- Future: push notifications

---

---

# ADMIN USER STORIES

## US-036: View Admin Dashboard
**Priority:** Critical | **Effort:** 8 | **Status:** To Do

**As an** admin  
**I want to** see a comprehensive dashboard with key metrics and recent activity  
**So that** I have oversight of system status and can quickly access management functions

**Acceptance Criteria:**
- [ ] Dashboard displays after login
- [ ] Stats grid shows: total hotels, destinations, events, members
- [ ] Each stat shows trend ("+12 this month")
- [ ] Recent activity feed displays last 4 activities
- [ ] Activity shows: action, time, type badge
- [ ] System status panel shows: database, API, backups
- [ ] All system components green when online
- [ ] Content Management tab lists 6 management sections
- [ ] Members tab shows member table (sample)
- [ ] Settings tab shows configurable options
- [ ] Tab navigation works smoothly
- [ ] Logout button functional

**Notes:**
- Real-time stats updates (future)
- Advanced filters (future)
- Export capability (future)

---

## US-037: Manage Hotel Listings
**Priority:** High | **Effort:** 8 | **Status:** To Do

**As an** admin  
**I want to** create, edit, and delete hotel listings  
**So that** I can maintain the accurate hotel directory

**Acceptance Criteria:**
- [ ] Hotels management page shows all hotels in table/grid
- [ ] Search hotels by name
- [ ] Filter by location, status
- [ ] "Add Hotel" button opens form
- [ ] Form fields: name, description, location, type, amenities, contact
- [ ] Amenities multi-select (WiFi, Pool, Restaurant, etc.)
- [ ] Image upload available
- [ ] Save/publish button
- [ ] Edit button on each hotel
- [ ] Delete button with confirmation
- [ ] Mark as featured toggle
- [ ] Bulk actions: delete, publish, feature
- [ ] Success confirmations

**Notes:**
- Image upload to cloud storage
- Future: hotel ratings sync
- Future: availability calendar

---

## US-038: Manage Destinations
**Priority:** High | **Effort:** 8 | **Status:** To Do

**As an** admin  
**I want to** create and manage destination listings  
**So that** I can maintain tourist destination content

**Acceptance Criteria:**
- [ ] Destinations page shows all destinations
- [ ] Search by name
- [ ] Filter by category, status
- [ ] "Add Destination" button
- [ ] Form fields: name, description, category, location, gallery, meta
- [ ] Image upload multiple
- [ ] Save as draft or publish
- [ ] Edit existing destination
- [ ] Delete destination (with confirmation)
- [ ] Bulk operations available
- [ ] Sort by name, date, category

**Notes:**
- Location coordinates required
- Future: visitor ratings

---

## US-039: Manage Events
**Priority:** High | **Effort:** 8 | **Status:** To Do

**As an** admin  
**I want to** create and manage event listings  
**So that** I can promote DHBA events

**Acceptance Criteria:**
- [ ] Events page shows all events
- [ ] Search by title
- [ ] Filter by status, date range, category
- [ ] "Create Event" button opens form
- [ ] Form fields: title, description, date, time, location, speakers, capacity
- [ ] Date/time picker
- [ ] Repeat event option (daily, weekly, monthly)
- [ ] Image upload
- [ ] Publish/unpublish option
- [ ] View registrations
- [ ] Send notifications to attendees
- [ ] Edit event details
- [ ] Delete event
- [ ] Export registration list

**Notes:**
- Calendar view (future)
- Email reminders to attendees
- Future: automatic reminders

---

## US-040: Manage Members
**Priority:** High | **Effort:** 8 | **Status:** To Do

**As an** admin  
**I want to** view and manage member organizations  
**So that** I can approve applications, handle suspensions, and maintain member database

**Acceptance Criteria:**
- [ ] Members page shows table of all members
- [ ] Search by organization name
- [ ] Filter by status (active, pending, inactive)
- [ ] Each row shows: org name, contact, email, status, actions
- [ ] Edit button opens member details
- [ ] Approve button (for pending members)
- [ ] Reject button (with reason)
- [ ] Suspend button (with confirmation)
- [ ] Delete member (soft delete)
- [ ] Send message to member
- [ ] Export member list
- [ ] Sort by name, join date, status
- [ ] Pagination for large lists

**Notes:**
- Email notification on approval/rejection
- Future: membership fees tracking
- Future: renewal reminders

---

## US-041: Manage Gallery
**Priority:** Medium | **Effort:** 5 | **Status:** To Do

**As an** admin  
**I want to** upload and manage photos and videos  
**So that** I can showcase DHBA activities and member hotels

**Acceptance Criteria:**
- [ ] Gallery management shows photo grid
- [ ] Tabs: Photos, Videos
- [ ] Upload button opens file picker
- [ ] Batch upload multiple files
- [ ] Drag and drop upload support
- [ ] Progress bar during upload
- [ ] Organize by album/event
- [ ] Add metadata (title, description, date)
- [ ] Delete photo with confirmation
- [ ] Set featured photo
- [ ] Alt text for accessibility
- [ ] Images compressed automatically

**Notes:**
- Cloud storage integration (S3/Cloudinary)
- Future: automatic resizing
- Future: watermarking

---

## US-042: Update Site Settings
**Priority:** Medium | **Effort:** 3 | **Status:** To Do

**As an** admin  
**I want to** update site configuration  
**So that** I can maintain site-wide settings

**Acceptance Criteria:**
- [ ] Settings tab displays form
- [ ] Editable fields: site name, contact email, URL, timezone
- [ ] Save button updates settings
- [ ] Success message displayed
- [ ] Changes persist
- [ ] System info section displays: version, last update
- [ ] View reports button
- [ ] Reset database button (destructive, with confirmation)

**Notes:**
- Backup before any destructive action
- Change log for audit trail

---

## US-043: View Activity Logs
**Priority:** Medium | **Effort:** 3 | **Status:** To Do

**As an** admin  
**I want to** view system activity logs  
**So that** I can audit actions and troubleshoot issues

**Acceptance Criteria:**
- [ ] Activity log page displays all recent actions
- [ ] Shows: action, user, resource, timestamp, status
- [ ] Filter by: user, action type, date range
- [ ] Search by keyword
- [ ] Export log to CSV
- [ ] Sort by date, action, user
- [ ] Pagination for large logs
- [ ] Real-time updates (future)

**Notes:**
- Security: only visible to admins
- Retention: keep for 90 days (configurable)
- Future: advanced analytics

---

---

# TECHNICAL USER STORIES

## US-044: API: Contact Form Submission
**Priority:** High | **Effort:** 3 | **Status:** To Do

**As a** system  
**I want to** accept and process contact form submissions  
**So that** inquiries are stored and notifications sent

**Acceptance Criteria:**
- [ ] POST `/api/contact` accepts form data
- [ ] Validates all required fields
- [ ] Spam check (honeypot field)
- [ ] Rate limiting: max 10 requests/hour per IP
- [ ] Store submission in database
- [ ] Send confirmation email to user
- [ ] Send notification email to admin
- [ ] Return success response
- [ ] Handle errors gracefully
- [ ] Log all submissions

**Notes:**
- Email service integration (SendGrid/AWS SES)
- Future: CRM integration

---

## US-045: API: User Authentication
**Priority:** Critical | **Effort:** 13 | **Status:** To Do

**As a** system  
**I want to** authenticate users and manage sessions  
**So that** only authorized users access protected features

**Acceptance Criteria:**
- [ ] POST `/api/auth/login` accepts email/password
- [ ] Validates credentials against database
- [ ] Generates JWT token
- [ ] Returns token and user info
- [ ] POST `/api/auth/signup` accepts registration data
- [ ] Validates all fields
- [ ] Hashes password with bcrypt
- [ ] Creates new user account
- [ ] Sends verification email
- [ ] POST `/api/auth/logout` clears session
- [ ] POST `/api/auth/forgot-password` sends reset email
- [ ] POST `/api/auth/reset-password` validates token
- [ ] POST `/api/auth/refresh-token` renews JWT
- [ ] GET `/api/auth/me` returns current user
- [ ] Rate limiting on login (5 attempts/5min)
- [ ] Rate limiting on password reset (3/hour)
- [ ] All passwords hashed securely
- [ ] Tokens expire after 24 hours
- [ ] Refresh tokens expire after 7 days

**Notes:**
- Use secure HTTP-only cookies
- Implement CSRF protection
- Add 2FA (future)

---

## US-046: API: Hotel Management
**Priority:** High | **Effort:** 8 | **Status:** To Do

**As a** system  
**I want to** provide CRUD endpoints for hotel management  
**So that** admins can manage hotel listings via API

**Acceptance Criteria:**
- [ ] GET `/api/admin/hotels` returns all hotels (paginated)
- [ ] GET `/api/admin/hotels/:id` returns single hotel
- [ ] POST `/api/admin/hotels` creates new hotel
- [ ] PUT `/api/admin/hotels/:id` updates hotel
- [ ] DELETE `/api/admin/hotels/:id` deletes hotel
- [ ] POST `/api/admin/hotels/:id/image` uploads image
- [ ] Validates all input data
- [ ] Admin authentication required
- [ ] Returns appropriate status codes
- [ ] Error messages clear
- [ ] Pagination works (limit, offset)
- [ ] Sorting works (name, date, rating)
- [ ] Filtering works (location, type, status)

**Notes:**
- Image upload to cloud storage
- Future: elasticsearch for better search

---

## US-047: API: Member Management
**Priority:** High | **Effort:** 8 | **Status:** To Do

**As a** system  
**I want to** provide endpoints for member profile and account management  
**So that** members can manage their data via API

**Acceptance Criteria:**
- [ ] GET `/api/member/profile` returns user profile
- [ ] PUT `/api/member/profile` updates profile
- [ ] POST `/api/member/profile/avatar` uploads avatar
- [ ] POST `/api/member/jobs` creates job posting
- [ ] GET `/api/member/jobs` returns my jobs
- [ ] PUT `/api/member/jobs/:id` updates job
- [ ] DELETE `/api/member/jobs/:id` deletes job
- [ ] GET `/api/member/messages` returns messages
- [ ] POST `/api/member/messages` sends message
- [ ] PUT `/api/member/messages/:id/read` marks as read
- [ ] GET `/api/member/network/connections` returns connections
- [ ] POST `/api/member/network/connect/:id` sends request
- [ ] Member authentication required
- [ ] Owns data check (user can only access own)
- [ ] Rate limiting on message creation

**Notes:**
- User-scoped queries
- Future: real-time messaging

---

## US-048: Responsive Mobile Design
**Priority:** High | **Effort:** 5 | **Status:** Done

**As a** mobile user  
**I want to** access the website on my phone  
**So that** I can browse DHBA content on the go

**Acceptance Criteria:**
- [ ] All pages responsive on mobile (320px+)
- [ ] All pages responsive on tablet (768px+)
- [ ] All pages responsive on desktop (1024px+)
- [ ] Touch targets minimum 44x44px
- [ ] Navigation collapse to hamburger on mobile
- [ ] Forms fit on small screens
- [ ] Images scale properly
- [ ] No horizontal scroll
- [ ] Fast load time on mobile

**Notes:**
- Tested on real devices
- Mobile-first design approach

---

## US-049: Bilingual Support
**Priority:** High | **Effort:** 3 | **Status:** Done

**As a** Nepali speaker  
**I want to** use the website in my language  
**So that** I can understand all content

**Acceptance Criteria:**
- [ ] All public pages translated to Nepali
- [ ] All UI elements translated
- [ ] Navigation in both languages
- [ ] Form labels translated
- [ ] Error messages translated
- [ ] Admin content in English
- [ ] Member portal in English
- [ ] 160+ translation keys
- [ ] Language toggle works smoothly
- [ ] Preference persists

**Notes:**
- English and Nepali (नेपाली) supported
- Future: more languages
- Nepali text right-aligned (RTL support future)

---

## US-050: SEO Optimization
**Priority:** Medium | **Effort:** 5 | **Status:** Done

**As a** website visitor  
**I want to** find the website through search engines  
**So that** I discover DHBA online

**Acceptance Criteria:**
- [ ] Meta tags on all pages
- [ ] Title tags descriptive
- [ ] Meta descriptions compelling
- [ ] Open Graph tags for social sharing
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] Canonical URLs set
- [ ] Structured data markup (schema.org)
- [ ] Images have alt text
- [ ] Fast page load time
- [ ] Mobile-friendly confirmed

**Notes:**
- Future: server-side rendering for dynamic pages
- Future: analytics integration

---

---

# EPIC SUMMARY

| Epic | Priority | Effort | Status | Stories |
|------|----------|--------|--------|---------|
| **Homepage & Navigation** | Critical | 8 | Done | US-001, US-015, US-016 |
| **Hotel Discovery** | Critical | 13 | Partial | US-002 to US-007 |
| **Destination & Events** | High | 10 | Partial | US-008 to US-010 |
| **Content Discovery** | Medium | 10 | Partial | US-011 to US-021 |
| **Authentication** | Critical | 13 | To Do | US-022 to US-026 |
| **Member Portal** | High | 21 | To Do | US-027 to US-035 |
| **Admin Dashboard** | High | 18 | To Do | US-036 to US-043 |
| **API Development** | Critical | 24 | To Do | US-044 to US-047 |
| **Technical** | High | 8 | Partial | US-048 to US-050 |

---

# PRIORITIZATION ROADMAP

## Phase 1: Public Features (Week 1-2)
- ✅ US-001: Homepage
- ✅ US-015: Language switching
- ✅ US-016: Theme toggle
- ✅ US-002-007: Hotel browsing
- ✅ US-048: Mobile responsiveness
- ✅ US-049: Bilingual support
- ✅ US-050: SEO optimization

**Status:** DONE

---

## Phase 2: Authentication (Week 3-4)
- 🔄 US-022: Admin login
- 🔄 US-023: Member login
- 🔄 US-024: Registration
- 🔄 US-025: Password reset
- 🔄 US-026: Logout
- 🔄 US-044: Auth API
- 🔄 US-045: JWT implementation

**Timeline:** 2 weeks  
**Priority:** CRITICAL

---

## Phase 3: Member Portal (Week 5-6)
- 🔄 US-027: Member dashboard
- 🔄 US-028: Profile management
- 🔄 US-029-031: Jobs and events
- 🔄 US-032-035: Resources and networking
- 🔄 US-046: Member APIs

**Timeline:** 2 weeks  
**Priority:** HIGH

---

## Phase 4: Admin Dashboard (Week 7-8)
- 🔄 US-036: Admin dashboard
- 🔄 US-037-043: Admin management
- 🔄 US-047: Admin APIs

**Timeline:** 2 weeks  
**Priority:** HIGH

---

## Phase 5: Advanced Features (Week 9-10)
- ⏳ Email notifications
- ⏳ Real-time messaging
- ⏳ Advanced analytics
- ⏳ Payment integration
- ⏳ Two-factor authentication

**Timeline:** 2 weeks  
**Priority:** MEDIUM

---

# EFFORT ESTIMATE SUMMARY

| Category | Count | Total Points | Avg per Story |
|----------|-------|--------------|----------------|
| Public Features | 21 | 85 | 4 |
| Authentication | 5 | 30 | 6 |
| Member Portal | 9 | 38 | 4.2 |
| Admin | 8 | 46 | 5.75 |
| Technical/API | 7 | 40 | 5.7 |
| **TOTAL** | **50** | **239** | **4.78** |

**Total Story Points:** 239 points  
**Estimated Timeline:** 8-10 weeks (with team of 2-3 developers)

---

**Document Version:** 1.0.0  
**Created:** December 17, 2025  
**Last Updated:** December 17, 2025  
**Status:** Ready for Sprint Planning
