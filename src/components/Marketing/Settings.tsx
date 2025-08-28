import React, { useState } from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Switch } from '../ui/switch';
import { HelpCircle, ExternalLink } from 'lucide-react';

interface SettingsProps {
  onToggleSidebar: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onToggleSidebar }) => {
  const [senderName, setSenderName] = useState('Circle Demo');
  const [senderEmail, setSenderEmail] = useState('circle');
  const [useDifferentReplyEmail, setUseDifferentReplyEmail] = useState(false);
  const [replyEmail, setReplyEmail] = useState('');
  const [address, setAddress] = useState('228 Park Ave St');
  const [city, setCity] = useState('New York');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('1003');
  const [country, setCountry] = useState('United States');

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    'Australia',
    'Japan',
    'Brazil',
    'India',
    'China',
  ];

  const handleSaveChanges = () => {
    console.log('Saving settings...');
    // Handle save logic here
  };

  return (
    <ContentContainer title="Settings" onToggleSidebar={onToggleSidebar}>
      <div className="max-w-2xl space-y-8">
        {/* From address section */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              From address
            </h3>
            <p className="text-sm text-gray-600">
              This will be displayed in the &apos;From&apos; field of your
              recipient&apos;s email client. We recommend using something your
              subscribers will instantly recognise, like your own name.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sender name
              </label>
              <Input
                value={senderName}
                onChange={e => setSenderName(e.target.value)}
                placeholder="Enter sender name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sender email
              </label>
              <div className="flex">
                <Input
                  value={senderEmail}
                  onChange={e => setSenderEmail(e.target.value)}
                  className="rounded-r-none"
                  placeholder="Enter email"
                />
                <div className="flex items-center px-3 bg-gray-50 border border-l-0 border-gray-300 rounded-r-md">
                  <span className="text-gray-500">@email.upfront.so</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Switch
                checked={useDifferentReplyEmail}
                onCheckedChange={setUseDifferentReplyEmail}
              />
              <label className="text-sm text-gray-700">
                Use a different email address for replies
              </label>
            </div>

            {useDifferentReplyEmail && (
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Reply-to email
                  </label>
                  <HelpCircle className="w-4 h-4 text-gray-400" />
                </div>
                <Input
                  value={replyEmail}
                  onChange={e => setReplyEmail(e.target.value)}
                  placeholder="Enter reply-to email"
                />
              </div>
            )}
          </div>
        </div>

        {/* Postal address section */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Postal address
            </h3>
            <p className="text-sm text-gray-600">
              To comply with anti-spam laws, every email needs to include a
              valid physical address where recipients can reach you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <Input
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Enter address"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <Input
                value={city}
                onChange={e => setCity(e.target.value)}
                placeholder="Enter city"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State / Province / Region
              </label>
              <Input
                value={state}
                onChange={e => setState(e.target.value)}
                placeholder="Enter state"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ZIP / Postal code
              </label>
              <Input
                value={zipCode}
                onChange={e => setZipCode(e.target.value)}
                placeholder="Enter ZIP code"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map(countryName => (
                    <SelectItem key={countryName} value={countryName}>
                      {countryName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Email footer section */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Email footer
            </h3>
            <p className="text-sm text-gray-600">
              The following footer will be appended to all your marketing emails
              to stay compliant and also provide the recipient with important
              options. The logo is taken from your community assets in{' '}
              <button className="text-blue-600 hover:text-blue-700 underline">
                customize theme
              </button>
              .
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="space-y-2 text-sm">
              <div className="font-semibold text-gray-900">Circle</div>
              <div>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  circle.upfront.so
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="text-gray-600">
                {address}, {city}, {zipCode}, {country}
              </div>
              <div className="pt-2 space-y-1">
                <a href="#" className="text-blue-600 hover:text-blue-700 block">
                  Update your email preferences
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700 block">
                  unsubscribe
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Save button */}
        <div className="flex justify-end pt-6">
          <Button onClick={handleSaveChanges}>Save changes</Button>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Settings;
