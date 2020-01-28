import React from 'react'

import './ContactForm.css'

const ContactForm = () => {
  return (
    <div id='contact-form' className='container'>
      <form method="POST" data-netlify="true" data-netlify-recaptcha="true">
        <div className="messages">
          <div className="controls">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="form_name">First Name *</label>
                  <input type="text" id="form-name" name="name" className="form-control" placeholder="Please enter your first name" />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="form_name">Last Name *</label>
                  <input type="text" id="form-name" name="name" className="form-control" placeholder="Please enter your last name" />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="form_email">Email *</label>
                  <input type="email" id="form-email" name="email" className="form-control" placeholder="Please enter your email address" />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label for="form_need">Please specify your need *</label>
                  <select id="form_need" name="need" class="form-control" required="required" data-error="Please specify your need.">
                    <option value=""></option>
                    <option value="Request quotation">Request quotation</option>
                    <option value="Request order status">Wedding</option>
                    <option value="Request copy of an invoice">Event</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className="col-md-12">
                <div className="form-group">
                  <label for="form_message">Message *</label>
                  <textarea id="form_message" name="message" className="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className='my-2'>
                <div data-netlify-recaptcha="true"></div>
              </div>
              <div className='col-md-12'>
                <input type='submit' className="btn btn-success btn-send" value="Send message" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p class="text-muted">
                  <strong>*</strong> These fields are required.</p>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  )
}

export default ContactForm