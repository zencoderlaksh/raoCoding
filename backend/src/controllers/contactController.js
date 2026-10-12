import Contact from '../models/Contact.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { sendMeetingEmail } from '../services/mailService.js';

/**
 * @desc    Submit an inquiry / contact request
 * @route   POST /api/contact
 * @access  Public
 */
export const submitContact = asyncHandler(async (req, res) => {
  const { name, email, phone, businessType, message, preferredDate, preferredTime } = req.body;

  if (!name || !email || !phone) {
    throw new ApiError(400, 'Name, email, and phone number are required.');
  }

  const newContact = await Contact.create({
    name: name.trim(),
    email: email.toLowerCase().trim(),
    phone: phone.trim(),
    businessType: businessType ? businessType.trim() : 'General Inquiry',
    message: message ? message.trim() : '',
    status: 'new',
  });

  // Send email notification in background
  sendMeetingEmail({
    name: name.trim(),
    email: email.toLowerCase().trim(),
    phone: phone.trim(),
    meetingType: businessType || 'General Meeting / Inquiry',
    preferredDate,
    preferredTime,
    agenda: message,
  }).catch((err) => console.error('Meeting email send error:', err.message));

  return res.status(201).json(
    new ApiResponse(
      201,
      newContact,
      'Thank you! Your inquiry / meeting request has been received. Our team will connect with you within 24 hours.'
    )
  );
});

/**
 * @desc    Get all contact inquiries (Admin only)
 * @route   GET /api/contact
 * @access  Private/Admin
 */
export const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({}).sort({ createdAt: -1 });

  return res.status(200).json(
    new ApiResponse(200, contacts, 'Inquiries fetched successfully.')
  );
});

/**
 * @desc    Update contact status (Admin only)
 * @route   PUT /api/contact/:id
 * @access  Private/Admin
 */
export const updateContactStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const validStatuses = ['new', 'contacted', 'resolved'];

  if (!validStatuses.includes(status)) {
    throw new ApiError(400, `Invalid status. Must be one of: ${validStatuses.join(', ')}`);
  }

  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  );

  if (!contact) {
    throw new ApiError(404, 'Contact inquiry not found.');
  }

  return res.status(200).json(
    new ApiResponse(200, contact, 'Contact status updated successfully.')
  );
});

export default {
  submitContact,
  getAllContacts,
  updateContactStatus,
};
