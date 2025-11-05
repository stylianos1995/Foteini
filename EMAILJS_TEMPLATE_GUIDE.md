# EmailJS Template Setup Guide

## Template HTML Code

Copy and paste this HTML code into your EmailJS template editor:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">

  <div>A message by {{from_name}} has been received. Kindly respond at your earliest convenience.</div>

  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation" style="width: 100%;">
      
      <!-- Contact Information Section -->
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            &#x1F464;
          </div>
        </td>
        <td style="vertical-align: top; width: 100%;">
          <div style="color: #2c3e50; font-size: 16px; margin-bottom: 5px;">
            <strong>{{from_name}}</strong>
          </div>
          <div style="color: #7f8c8d; font-size: 13px; margin-bottom: 10px;">
            📧 {{from_email}}
          </div>
        </td>
      </tr>

      <!-- Appointment Details Section -->
      <tr>
        <td colspan="2" style="padding-top: 15px; padding-bottom: 10px;">
          <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 8px;">
            Appointment Request:
          </div>
          <div style="color: #7f8c8d; font-size: 13px; margin-bottom: 5px;">
            📅 Date: {{appointment_date}}
          </div>
          <div style="color: #7f8c8d; font-size: 13px; margin-bottom: 10px;">
            🕐 Time: {{appointment_time}}
          </div>
        </td>
      </tr>

      <!-- Topic Section -->
      <tr>
        <td colspan="2" style="padding-top: 10px; padding-bottom: 10px;">
          <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 8px;">
            Topic:
          </div>
          <div style="color: #7f8c8d; font-size: 13px; margin-bottom: 10px;">
            {{topic}}
          </div>
        </td>
      </tr>

      <!-- Message Section -->
      <tr>
        <td colspan="2" style="padding-top: 10px; padding-bottom: 10px;">
          <div style="color: #2c3e50; font-size: 14px; font-weight: bold; margin-bottom: 8px;">
            Message:
          </div>
          <div style="color: #2c3e50; font-size: 14px; line-height: 1.6; padding: 10px; background-color: #f8f9fa; border-radius: 5px; border-left: 3px solid #E4C6BD;">
            {{message}}
          </div>
        </td>
      </tr>

    </table>
  </div>

  <!-- Footer -->
  <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e0e0e0; color: #95a5a6; font-size: 11px; text-align: center;">
    This message was sent from your website contact form.
  </div>

</div>
```

## Template Variables Used

The following variables are available from the contact form:

- `{{from_name}}` - Client's name
- `{{from_email}}` - Client's email address
- `{{appointment_date}}` - Preferred appointment date
- `{{appointment_time}}` - Preferred appointment time
- `{{topic}}` - Selected topic/issue to discuss
- `{{message}}` - Additional message/details

## EmailJS Setup Steps

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com/admin/templates

2. **Create New Template** or edit existing one

3. **Template Settings**:
   - **Template Name**: "Contact Form Submission" (or your preferred name)
   - **Subject**: "New Appointment Request from {{from_name}}"
   - **Content**: Paste the HTML code above
   - **To Email**: `dritselifoteini@gmail.com`
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}` (or leave as default)

4. **Save the Template** and copy the **Template ID**

5. **Get your credentials**:
   - Service ID: https://dashboard.emailjs.com/admin/integration
   - Template ID: From the template you just created
   - Public Key: https://dashboard.emailjs.com/admin/account

6. **Add to your project**:
   - Create a `.env` file in the root directory
   - Add:
     ```
     REACT_APP_EMAILJS_SERVICE_ID=your_service_id
     REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
     REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
     ```
   - Restart your development server

## Alternative: Simple Version

If you prefer a simpler template, here's a minimal version:

```html
<div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #333;">
  
  <h2 style="color: #2c3e50;">New Contact Form Submission</h2>
  
  <p><strong>Name:</strong> {{from_name}}</p>
  <p><strong>Email:</strong> {{from_email}}</p>
  <p><strong>Preferred Date:</strong> {{appointment_date}}</p>
  <p><strong>Preferred Time:</strong> {{appointment_time}}</p>
  <p><strong>Topic:</strong> {{topic}}</p>
  
  <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
    <strong>Message:</strong>
    <p style="margin-top: 10px;">{{message}}</p>
  </div>
  
</div>
```

