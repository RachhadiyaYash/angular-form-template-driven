# Angular Template-Driven Form with Validation and File Upload

This project is a comprehensive Angular application that demonstrates the power of template-driven forms with real-time validation, dynamic content, and file handling. Built with **Angular 18** and **Bootstrap**, the form collects user information such as personal details, preferred exam location, and a file upload (PDF only).

## Key Features:

### 1. Template-Driven Form:

- Leverages Angular's template-driven approach to handle form inputs efficiently and provide a clean, reactive user experience.

### 2. Form Validation:

- **Required Fields**: Name, mobile number, PAN, email, and other fields are validated in real-time.
- **Regular Expressions**: Validate PAN numbers, emails, and numeric input for data accuracy.
- **Terms & Conditions**: Users must accept before submitting the form.

### 3. File Upload with Validation:

- Users can upload **PDF** files.
- The application ensures:
  - Only PDF files are accepted.
  - The file size must not exceed **1 MB**.
- Instant error messages appear for invalid file uploads.

### 4. Date Picker for Birthday:

- A date picker allows users to select their birthday.
- Validation prevents the selection of future dates.
- Implemented using **HTML5's** native date input field.

### 5. Dynamic Location Selection:

- Users can select their preferred exam location from a dynamic list of **states** and **districts**.
- When a state is selected, the district list updates automatically based on the state.

### 6. Responsive Design:

- Built with **Bootstrap**, ensuring smooth experience across devices including desktop and mobile.

## Technologies Used:

- **Angular 18**: For form handling, validation, and dynamic content rendering.
- **Bootstrap**: For responsive design and enhanced UI.
- **TypeScript**: For strongly-typed logic in the Angular app.
- **HTML5** and **CSS3**: To create a clean and functional form UI.

## Challenges Overcome:

- **Custom Form Validations**: PAN, email, and file upload validations to ensure correct input formats.
- **Dynamic Location Options**: Generating location options dynamically based on state selection, with data fetched from a local JSON file.
- **Responsive Design**: Ensuring the form's responsiveness across devices using Bootstrap.


