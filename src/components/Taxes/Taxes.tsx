import React, { useState } from 'react';
import ContentContainer from '../ContentContainer';
import Collapse from '../ui/collapse';
import { Button } from '../ui';

interface TaxesProps {
  onToggleSidebar: () => void;
}

const Taxes: React.FC<TaxesProps> = ({ onToggleSidebar }) => {
  const [taxPricing, setTaxPricing] = useState('exclude');

  return (
    <ContentContainer title="Taxes" onToggleSidebar={onToggleSidebar}>
      <div className="overflow-y-auto">
        <div className="p-6 space-y-6 max-w-3xl mx-auto">
          {/* Stripe Tax enabled */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  ACTIVE
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Stripe Tax enabled
                </h3>
                <p className="text-sm text-gray-600">
                  You have enabled Stripe Tax, you can edit business details
                  including: your origin address, general product tax category,
                  and registrations in{' '}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Stripe Tax settings
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Enable Stripe Tax collection */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  ENABLED
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Enable Stripe Tax collection
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Circle integrates with{' '}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Stripe Tax
                  </a>{' '}
                  to collect taxes on your paywall purchases. While Stripe Tax
                  can help you collect and report on taxes, you&apos;re
                  responsible for{' '}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    filing and remitting these taxes
                  </a>{' '}
                  using a Stripe Tax partner such as{' '}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    TaxJar&apos;s AutoFile solution (US)
                  </a>{' '}
                  or{' '}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Taxually (EU and APAC)
                  </a>
                  . Transactions processed with Stripe Tax incur an{' '}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    additional fee from Stripe
                  </a>
                  .
                </p>
                <p className="text-sm text-gray-600 mb-6">
                  Please click on the button below to activate tax collection
                  with Stripe Tax. Once activated, taxes will be displayed and
                  collected for new subscriptions whenever a billing address
                  matches a state or country you&apos;re registered to collect
                  taxes from.
                </p>

                {/* Tax pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Tax pricing
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="taxPricing"
                        value="include"
                        checked={taxPricing === 'include'}
                        onChange={e => setTaxPricing(e.target.value)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        Include taxes in the price total
                      </span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="taxPricing"
                        value="exclude"
                        checked={taxPricing === 'exclude'}
                        onChange={e => setTaxPricing(e.target.value)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        Don&apos;t include taxes in the price total
                      </span>
                    </label>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center space-x-3">
                  <Button variant="default">Update</Button>
                  <Button variant="destructive">Disable tax collection</Button>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">FAQs</h3>
            <div className="space-y-3">
              <Collapse title="Understanding sales tax compliance">
                <p>
                  Sales tax compliance involves understanding when and where you
                  need to collect taxes based on your business location and
                  customer locations. This includes nexus requirements, tax
                  rates, and filing obligations.
                </p>
              </Collapse>
              <Collapse title="Monitoring tax thresholds">
                <p>
                  Tax thresholds determine when you&apos;re required to collect
                  sales tax in a particular state or country. These thresholds
                  are based on sales volume or transaction count and vary by
                  jurisdiction.
                </p>
              </Collapse>
              <Collapse title="Registering for sales tax, VAT and GST">
                <p>
                  Registration requirements vary by jurisdiction. In the US, you
                  typically register with state tax authorities. In the EU, you
                  register for VAT. In other countries, you may need to register
                  for GST or similar consumption taxes.
                </p>
              </Collapse>
              <Collapse title="Tax Reporting">
                <p>
                  Tax reporting involves filing regular returns with tax
                  authorities, reporting collected taxes, and maintaining proper
                  records. The frequency and format vary by jurisdiction and
                  your business size.
                </p>
              </Collapse>
              <Collapse title="How much does Stripe Tax cost?">
                <p>
                  Stripe Tax charges a fee of 0.5% on transactions where tax is
                  calculated and collected. This fee is in addition to your
                  standard Stripe processing fees and is only charged when tax
                  is actually collected.
                </p>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Taxes;
