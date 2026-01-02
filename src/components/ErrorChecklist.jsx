import { useState } from "react";
import {
  ChevronDown,
  AlertTriangle,
  CheckCircle2,
  Filter,
  X,
  Search,
  FileText,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const commonErrors = [
  {
    id: "1",
    category: "Personal Information",
    title: "Incorrect Name or Spelling",
    description:
      "Your name is misspelled or listed incorrectly on your credit report.",
    howToFix: [
      "Gather proof of correct name (ID, Social Security card)",
      "Submit dispute letter to all three bureaus",
      "Include copies of supporting documents",
      "Follow up within 30 days",
    ],
    severity: "medium",
  },
  {
    id: "2",
    category: "Personal Information",
    title: "Wrong Address Listed",
    description: "An address you've never lived at appears on your report.",
    howToFix: [
      "Check for signs of identity theft",
      "File dispute with credit bureaus",
      "Provide proof of correct addresses",
      "Consider placing a fraud alert",
    ],
    severity: "medium",
  },
  {
    id: "3",
    category: "Account Errors",
    title: "Accounts That Aren't Yours",
    description: "Credit accounts you never opened appear on your report.",
    howToFix: [
      "Immediately place a fraud alert",
      "File a dispute with all bureaus",
      "Contact the creditor directly",
      "File an FTC identity theft report",
      "Consider a credit freeze",
    ],
    severity: "high",
  },
  {
    id: "4",
    category: "Account Errors",
    title: "Duplicate Accounts",
    description:
      "The same account appears multiple times, inflating your debt.",
    howToFix: [
      "Document all instances of duplication",
      "File dispute with bureau",
      "Request removal of duplicates",
      "Monitor for correction confirmation",
    ],
    severity: "high",
  },
  {
    id: "5",
    category: "Payment History",
    title: "Incorrect Late Payment",
    description: "A payment marked as late when you paid on time.",
    howToFix: [
      "Gather payment records and bank statements",
      "Contact creditor first for goodwill adjustment",
      "File formal dispute if needed",
      "Keep all correspondence records",
    ],
    severity: "high",
  },
  {
    id: "6",
    category: "Payment History",
    title: "Closed Account Shown as Open",
    description: "An account you closed still shows as active.",
    howToFix: [
      "Obtain closure confirmation from creditor",
      "File dispute with supporting documents",
      "Request status update to 'closed by consumer'",
    ],
    severity: "low",
  },
  {
    id: "7",
    category: "Balance Errors",
    title: "Incorrect Credit Limit",
    description:
      "Your credit limit is shown incorrectly, affecting utilization.",
    howToFix: [
      "Get statement showing correct limit",
      "Contact creditor to update information",
      "File dispute if creditor doesn't correct",
    ],
    severity: "medium",
  },
  {
    id: "8",
    category: "Balance Errors",
    title: "Wrong Balance Amount",
    description: "Balance shown is higher than your actual balance.",
    howToFix: [
      "Compare with recent statements",
      "Document the correct balance",
      "File dispute with proof",
      "Request creditor verification",
    ],
    severity: "medium",
  },
  {
    id: "9",
    category: "Collections",
    title: "Paid Debt Still Showing",
    description: "A debt you've paid in full still appears as outstanding.",
    howToFix: [
      "Obtain proof of payment/settlement",
      "Request 'paid in full' letter from creditor",
      "File dispute with documentation",
      "Demand removal if debt is old",
    ],
    severity: "high",
  },
  {
    id: "10",
    category: "Inquiries",
    title: "Unauthorized Hard Inquiries",
    description: "Credit checks you didn't authorize appear on your report.",
    howToFix: [
      "Identify the source of inquiry",
      "File dispute for unauthorized inquiries",
      "Consider fraud alert if suspicious",
      "Monitor for additional unauthorized activity",
    ],
    severity: "low",
  },
];

const ErrorChecklist = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    ...Array.from(new Set(commonErrors.map((e) => e.category))),
  ];

  const filteredErrors = commonErrors.filter((error) => {
    const matchesSearch =
      searchTerm === "" ||
      error.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      error.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      error.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || error.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return {
          bg: "bg-red-50",
          text: "text-red-700",
          border: "border-red-200",
          icon: "text-red-600",
          badge: "bg-red-100 text-red-800 border-red-200",
        };
      case "medium":
        return {
          bg: "bg-yellow-50",
          text: "text-yellow-700",
          border: "border-yellow-200",
          icon: "text-yellow-600",
          badge: "bg-yellow-100 text-yellow-800 border-yellow-200",
        };
      case "low":
        return {
          bg: "bg-emerald-50",
          text: "text-emerald-700",
          border: "border-emerald-200",
          icon: "text-emerald-600",
          badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
        };
      default:
        return {
          bg: "bg-gray-50",
          text: "text-gray-700",
          border: "border-gray-200",
          icon: "text-gray-600",
          badge: "bg-gray-100 text-gray-800 border-gray-200",
        };
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const clearAll = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <>
      <Header />
      <section
        className="py-24 bg-gradient-to-br from-emerald-50 to-white"
        id="error"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              Dispute Preparation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Common Credit Report Errors
            </h2>
            <p className="text-lg text-gray-600">
              Identify errors on your credit report and follow our step-by-step
              correction checklists to dispute inaccuracies.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm text-center">
              <div className="text-2xl font-bold text-emerald-600 mb-1">
                80%
              </div>
              <div className="text-sm text-gray-600">
                Reports Contain Errors
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm text-center">
              <div className="text-2xl font-bold text-emerald-600 mb-1">
                25%
              </div>
              <div className="text-sm text-gray-600">
                Have Score-Affecting Errors
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm text-center">
              <div className="text-2xl font-bold text-emerald-600 mb-1">
                20-40
              </div>
              <div className="text-sm text-gray-600">Avg. Points Recovered</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm text-center">
              <div className="text-2xl font-bold text-emerald-600 mb-1">
                70%
              </div>
              <div className="text-sm text-gray-600">Disputes Successful</div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-10 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search for specific errors (e.g., 'late payment', 'address', 'fraud')..."
                className="w-full pl-12 pr-10 py-4 bg-white border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center text-sm text-gray-600">
                <Filter className="w-4 h-4 mr-2" />
                Filter by:
              </div>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-white text-gray-700 border border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Error Count and Clear */}
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              {filteredErrors.length}{" "}
              {filteredErrors.length === 1 ? "Error" : "Errors"} Found
            </h3>
            {(searchTerm || selectedCategory !== "All") && (
              <button
                onClick={clearAll}
                className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                Clear all filters
              </button>
            )}
          </div>

          {/* Error Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredErrors.map((error) => {
              const colors = getSeverityColor(error.severity);
              const isExpanded = expandedId === error.id;

              return (
                <div
                  key={error.id}
                  className={`bg-white rounded-xl border ${colors.border} shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden`}
                >
                  {/* Card Header */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : error.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        {/* Category and Severity */}
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
                            {error.category}
                          </span>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colors.badge}`}
                          >
                            {error.severity.charAt(0).toUpperCase() +
                              error.severity.slice(1)}{" "}
                            Priority
                          </span>
                        </div>

                        {/* Title and Description */}
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {error.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {error.description}
                        </p>

                        {/* Fix Count */}
                        <div className="flex items-center text-sm text-gray-500">
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          {error.howToFix.length} steps to fix
                        </div>
                      </div>

                      {/* Expand Icon */}
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ml-4 flex-shrink-0 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expandable Content */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <h4 className="font-semibold text-gray-900">
                          How to Fix This Error
                        </h4>
                      </div>

                      <ol className="space-y-3 pl-1">
                        {error.howToFix.map((step, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {step}
                            </p>
                          </li>
                        ))}
                      </ol>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
                        <button className="flex-1 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                          <FileText className="w-4 h-4" />
                          Get Template Letter
                        </button>
                        <button className="px-4 py-2 bg-white text-emerald-600 text-sm font-medium rounded-lg border border-emerald-300 hover:bg-emerald-50 transition-colors">
                          Save for Later
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredErrors.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No errors found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={clearAll}
                className="px-6 py-2 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ErrorChecklist;
