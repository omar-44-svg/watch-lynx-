import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';
import Button from '../components/ui/Button';
import { useAuthStore } from '../store/authStore';

const SellerRegistrationPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const signUp = useAuthStore((state) => state.signUp);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    businessName: '',
    address: '',
    website: '',
    idDocument: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(formData.email, formData.password, type as 'individual' | 'dealer');
      navigate('/seller/dashboard');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const isIndividual = type === 'individual';

  return (
    <div className="min-h-screen bg-silver-100 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl text-black text-center mb-4">
            {isIndividual ? 'Individual Seller Registration' : 'Dealership Registration'}
          </h1>
          <p className="text-center text-gray-600 mb-12">
            {isIndividual 
              ? 'Complete your profile to start selling your watches'
              : 'Register your dealership to join our trusted seller network'
            }
          </p>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-premium p-8">
            <div className="space-y-6">
              {!isIndividual && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-silver-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isIndividual ? 'Full Name' : 'Contact Person'}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-silver-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-silver-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-2 border border-silver-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isIndividual ? 'Home Address' : 'Business Address'}
                </label>
                <textarea
                  required
                  className="w-full px-4 py-2 border border-silver-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
                  rows={3}
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              {!isIndividual && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website/Instagram (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-silver-300 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {isIndividual ? 'ID Document' : 'Business Verification Documents'}
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-silver-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer rounded-md font-medium text-gold hover:text-gold-600">
                        <span>Upload a file</span>
                        <input
                          type="file"
                          className="sr-only"
                          onChange={(e) => setFormData({ ...formData, idDocument: e.target.files?.[0] || null })}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  type="submit"
                >
                  Complete Registration
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerRegistrationPage;