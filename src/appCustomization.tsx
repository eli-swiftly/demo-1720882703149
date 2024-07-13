import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { Home, BarChart2, Settings, Users, Calendar, Phone, FileText, Inbox } from 'lucide-react';

type CustomComponentProps = {
  config: AppConfig;
};

interface CustomComponents {
  [key: string]: React.FC<CustomComponentProps>;
}

interface CustomData {
  [key: string]: any;
}

// =============== CUSTOM COMPONENTS ===============
const PropertyOccupationComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Shopping Center A', status: 'Vacant', nextAction: 'Occupy', nextActionDate: '2023-09-15' },
    { id: 2, name: 'Retail Store B', status: 'Occupied', nextAction: 'Vacate', nextActionDate: '2023-10-01' },
    { id: 3, name: 'Office Building C', status: 'Vacant', nextAction: 'Occupy', nextActionDate: '2023-09-20' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Property Occupation Management</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Status</th>
            <th>Next Action</th>
            <th>Next Action Date</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.status}</td>
              <td>{property.nextAction}</td>
              <td>{property.nextActionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const InvoiceProcessingComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [invoices, setInvoices] = useState([
    { id: 1, property: 'Shopping Center A', amount: 5000, status: 'Pending' },
    { id: 2, property: 'Retail Store B', amount: 3000, status: 'Paid' },
    { id: 3, property: 'Office Building C', amount: 7000, status: 'Overdue' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Invoice Processing</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.property}</td>
              <td>£{invoice.amount}</td>
              <td>{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// =============== CONFIGURATION ===============
const customConfig: AppConfig = {
  title: "QuoinStone Group - Property Management",
  companyName: "QuoinStone Group",
  logo: "/path/to/quoinstone-logo.png",
  primaryColor: "#4F46E5",
  secondaryColor: "#818CF8",
  userName: "Tim Struth",
  dashboard: {
    tabs: [
      {
        id: "propertyOccupation",
        label: "Property Occupation",
        description: "Manage property occupation cycles",
        icon: Home
      },
      {
        id: "invoiceProcessing",
        label: "Invoice Processing",
        description: "Process and track invoices",
        icon: FileText
      },
    ] as TabConfig[],
    charts: {
      propertyStatus: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#4F46E5", "#818CF8"],
        data: [
          { name: 'Occupied', value: 60 },
          { name: 'Vacant', value: 40 },
        ]
      },
      invoiceStatus: {
        type: "bar",
        dataKeys: ["count"],
        colors: ["#4F46E5"],
        data: [
          { name: 'Pending', count: 10 },
          { name: 'Paid', count: 15 },
          { name: 'Overdue', count: 5 },
        ]
      },
    }
  },
  analytics: {
    charts: {
      revenueGrowth: {
        type: "line",
        dataKeys: ["growth"],
        colors: ["#4F46E5"],
        data: [
          { year: '2020', growth: 20 },
          { year: '2021', growth: 25 },
          { year: '2022', growth: 30 },
          { year: '2023', growth: 35 },
        ]
      },
    }
  },
  clients: [
    { id: "client1", name: "Major Retailer A", industry: "Retail" },
    { id: "client2", name: "Office Space Corp", industry: "Commercial Real Estate" },
    { id: "client3", name: "Shopping Mall Group", industry: "Retail" },
  ],
  features: {
    propertyManagement: true,
    invoiceProcessing: true,
    taxAdvice: true,
    dataImport: true,
    reporting: true,
  }
};

// =============== CUSTOM COMPONENTS MAPPING ===============
const customComponents: CustomComponents = {
  propertyOccupation: PropertyOccupationComponent,
  invoiceProcessing: InvoiceProcessingComponent,
};

// =============== CUSTOM DATA ===============
const customData: CustomData = {
  propertyTypes: ['Retail', 'Office', 'Shopping Center'],
  invoiceStatuses: ['Pending', 'Paid', 'Overdue'],
  occupationCycle: ['Vacant', 'Occupied', 'Vacant'],
};

// =============== EXPORT ===============
export const customization = {
  config: customConfig,
  components: customComponents,
  data: customData,
};