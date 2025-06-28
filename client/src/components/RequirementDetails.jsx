import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../constants';

const RequirementDetails = () => {
  const { id } = useParams();
  const [requirement, setRequirement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequirement = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/reqi/getRequirementWithBuyer/${id}`);
        setRequirement(res.data);
      } catch (error) {
        console.error('Error fetching requirement:', error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRequirement();
  }, [id]);

  if (loading) return <div className="text-center py-10 text-green-500">Loading requirement details...</div>;
  if (!requirement) return <div className="text-center py-10 text-red-500">Requirement not found</div>;

  const { product, quantity, notes, buyerId } = requirement;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 pt-20">
      <div className="bg-white shadow-md rounded-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-green-800">Requirement Details</h1>

        <div className="text-lg text-gray-700 space-y-2">
          <p><strong>Product:</strong> {product}</p>
          <p><strong>Quantity:</strong> {quantity}</p>
          <p><strong>Notes:</strong> {notes || 'No additional notes'}</p>
        </div>

        <hr className="my-4" />

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Buyer Information</h2>

      {buyerId ? (
  <div className="text-gray-700 space-y-2 text-lg">
    <p><strong>Name:</strong> {buyerId.name}</p>
    <p><strong>Email:</strong> {buyerId.email}</p>
    <p><strong>Phone:</strong> {buyerId.phoneNumber}</p>
    <p><strong>Address:</strong> {buyerId.address}</p>
    <p><strong>Business Type:</strong> {buyerId.businessType?.join(', ')}</p>
    <p><strong>Preferred Products:</strong> {buyerId.preferredProducts?.join(', ')}</p>

    <a
      href={`tel:${buyerId.phoneNumber}`}
      className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg mt-6 transition"
    >
      📞 Contact Buyer
    </a>
  </div>
) : (
  <p className="text-red-500">Buyer details not available.</p>
)}

      </div>
    </div>
  );
};

export default RequirementDetails;
