import {
  useFieldArray,
  useForm
} from "/build/_shared/chunk-ZI3VNW5U.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-HYDBX6IC.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/components/EducationForm.tsx
var import_react = __toESM(require_react());

// app/assets/data/countries.ts
var countries_default = [
  { "name": "Afghanistan", "code": "AF" },
  { "name": "\xC5land Islands", "code": "AX" },
  { "name": "Albania", "code": "AL" },
  { "name": "Algeria", "code": "DZ" },
  { "name": "American Samoa", "code": "AS" },
  { "name": "AndorrA", "code": "AD" },
  { "name": "Angola", "code": "AO" },
  { "name": "Anguilla", "code": "AI" },
  { "name": "Antarctica", "code": "AQ" },
  { "name": "Antigua and Barbuda", "code": "AG" },
  { "name": "Argentina", "code": "AR" },
  { "name": "Armenia", "code": "AM" },
  { "name": "Aruba", "code": "AW" },
  { "name": "Australia", "code": "AU" },
  { "name": "Austria", "code": "AT" },
  { "name": "Azerbaijan", "code": "AZ" },
  { "name": "Bahamas", "code": "BS" },
  { "name": "Bahrain", "code": "BH" },
  { "name": "Bangladesh", "code": "BD" },
  { "name": "Barbados", "code": "BB" },
  { "name": "Belarus", "code": "BY" },
  { "name": "Belgium", "code": "BE" },
  { "name": "Belize", "code": "BZ" },
  { "name": "Benin", "code": "BJ" },
  { "name": "Bermuda", "code": "BM" },
  { "name": "Bhutan", "code": "BT" },
  { "name": "Bolivia", "code": "BO" },
  { "name": "Bosnia and Herzegovina", "code": "BA" },
  { "name": "Botswana", "code": "BW" },
  { "name": "Bouvet Island", "code": "BV" },
  { "name": "Brazil", "code": "BR" },
  { "name": "British Indian Ocean Territory", "code": "IO" },
  { "name": "Brunei Darussalam", "code": "BN" },
  { "name": "Bulgaria", "code": "BG" },
  { "name": "Burkina Faso", "code": "BF" },
  { "name": "Burundi", "code": "BI" },
  { "name": "Cambodia", "code": "KH" },
  { "name": "Cameroon", "code": "CM" },
  { "name": "Canada", "code": "CA" },
  { "name": "Cape Verde", "code": "CV" },
  { "name": "Cayman Islands", "code": "KY" },
  { "name": "Central African Republic", "code": "CF" },
  { "name": "Chad", "code": "TD" },
  { "name": "Chile", "code": "CL" },
  { "name": "China", "code": "CN" },
  { "name": "Christmas Island", "code": "CX" },
  { "name": "Cocos (Keeling) Islands", "code": "CC" },
  { "name": "Colombia", "code": "CO" },
  { "name": "Comoros", "code": "KM" },
  { "name": "Congo", "code": "CG" },
  { "name": "Congo, The Democratic Republic of the", "code": "CD" },
  { "name": "Cook Islands", "code": "CK" },
  { "name": "Costa Rica", "code": "CR" },
  { "name": "Croatia", "code": "HR" },
  { "name": "Cuba", "code": "CU" },
  { "name": "Cyprus", "code": "CY" },
  { "name": "Czech Republic", "code": "CZ" },
  { "name": "Denmark", "code": "DK" },
  { "name": "Djibouti", "code": "DJ" },
  { "name": "Dominica", "code": "DM" },
  { "name": "Dominican Republic", "code": "DO" },
  { "name": "Ecuador", "code": "EC" },
  { "name": "Egypt", "code": "EG" },
  { "name": "El Salvador", "code": "SV" },
  { "name": "Equatorial Guinea", "code": "GQ" },
  { "name": "Eritrea", "code": "ER" },
  { "name": "Estonia", "code": "EE" },
  { "name": "Ethiopia", "code": "ET" },
  { "name": "Falkland Islands (Malvinas)", "code": "FK" },
  { "name": "Faroe Islands", "code": "FO" },
  { "name": "Fiji", "code": "FJ" },
  { "name": "Finland", "code": "FI" },
  { "name": "France", "code": "FR" },
  { "name": "French Guiana", "code": "GF" },
  { "name": "French Polynesia", "code": "PF" },
  { "name": "French Southern Territories", "code": "TF" },
  { "name": "Gabon", "code": "GA" },
  { "name": "Gambia", "code": "GM" },
  { "name": "Georgia", "code": "GE" },
  { "name": "Germany", "code": "DE" },
  { "name": "Ghana", "code": "GH" },
  { "name": "Gibraltar", "code": "GI" },
  { "name": "Greece", "code": "GR" },
  { "name": "Greenland", "code": "GL" },
  { "name": "Grenada", "code": "GD" },
  { "name": "Guadeloupe", "code": "GP" },
  { "name": "Guam", "code": "GU" },
  { "name": "Guatemala", "code": "GT" },
  { "name": "Guernsey", "code": "GG" },
  { "name": "Guinea", "code": "GN" },
  { "name": "Guinea-Bissau", "code": "GW" },
  { "name": "Guyana", "code": "GY" },
  { "name": "Haiti", "code": "HT" },
  { "name": "Heard Island and Mcdonald Islands", "code": "HM" },
  { "name": "Holy See (Vatican City State)", "code": "VA" },
  { "name": "Honduras", "code": "HN" },
  { "name": "Hong Kong", "code": "HK" },
  { "name": "Hungary", "code": "HU" },
  { "name": "Iceland", "code": "IS" },
  { "name": "India", "code": "IN" },
  { "name": "Indonesia", "code": "ID" },
  { "name": "Iran, Islamic Republic Of", "code": "IR" },
  { "name": "Iraq", "code": "IQ" },
  { "name": "Ireland", "code": "IE" },
  { "name": "Isle of Man", "code": "IM" },
  { "name": "Israel", "code": "IL" },
  { "name": "Italy", "code": "IT" },
  { "name": "Jamaica", "code": "JM" },
  { "name": "Japan", "code": "JP" },
  { "name": "Jersey", "code": "JE" },
  { "name": "Jordan", "code": "JO" },
  { "name": "Kazakhstan", "code": "KZ" },
  { "name": "Kenya", "code": "KE" },
  { "name": "Kiribati", "code": "KI" },
  { "name": "Korea, Republic of", "code": "KR" },
  { "name": "Kuwait", "code": "KW" },
  { "name": "Kyrgyzstan", "code": "KG" },
  { "name": "Latvia", "code": "LV" },
  { "name": "Lebanon", "code": "LB" },
  { "name": "Lesotho", "code": "LS" },
  { "name": "Liberia", "code": "LR" },
  { "name": "Libyan Arab Jamahiriya", "code": "LY" },
  { "name": "Liechtenstein", "code": "LI" },
  { "name": "Lithuania", "code": "LT" },
  { "name": "Luxembourg", "code": "LU" },
  { "name": "Macao", "code": "MO" },
  { "name": "North Macedonia", "code": "MK" },
  { "name": "Madagascar", "code": "MG" },
  { "name": "Malawi", "code": "MW" },
  { "name": "Malaysia", "code": "MY" },
  { "name": "Maldives", "code": "MV" },
  { "name": "Mali", "code": "ML" },
  { "name": "Malta", "code": "MT" },
  { "name": "Marshall Islands", "code": "MH" },
  { "name": "Martinique", "code": "MQ" },
  { "name": "Mauritania", "code": "MR" },
  { "name": "Mauritius", "code": "MU" },
  { "name": "Mayotte", "code": "YT" },
  { "name": "Mexico", "code": "MX" },
  { "name": "Micronesia, Federated States of", "code": "FM" },
  { "name": "Moldova, Republic of", "code": "MD" },
  { "name": "Monaco", "code": "MC" },
  { "name": "Mongolia", "code": "MN" },
  { "name": "Montserrat", "code": "MS" },
  { "name": "Morocco", "code": "MA" },
  { "name": "Mozambique", "code": "MZ" },
  { "name": "Myanmar", "code": "MM" },
  { "name": "Namibia", "code": "NA" },
  { "name": "Nauru", "code": "NR" },
  { "name": "Nepal", "code": "NP" },
  { "name": "Netherlands", "code": "NL" },
  { "name": "Netherlands Antilles", "code": "AN" },
  { "name": "New Caledonia", "code": "NC" },
  { "name": "New Zealand", "code": "NZ" },
  { "name": "Nicaragua", "code": "NI" },
  { "name": "Niger", "code": "NE" },
  { "name": "Nigeria", "code": "NG" },
  { "name": "Niue", "code": "NU" },
  { "name": "Norfolk Island", "code": "NF" },
  { "name": "Northern Mariana Islands", "code": "MP" },
  { "name": "Norway", "code": "NO" },
  { "name": "Oman", "code": "OM" },
  { "name": "Pakistan", "code": "PK" },
  { "name": "Palau", "code": "PW" },
  { "name": "Palestinian Territory, Occupied", "code": "PS" },
  { "name": "Panama", "code": "PA" },
  { "name": "Papua New Guinea", "code": "PG" },
  { "name": "Paraguay", "code": "PY" },
  { "name": "Peru", "code": "PE" },
  { "name": "Philippines", "code": "PH" },
  { "name": "Pitcairn Islands", "code": "PN" },
  { "name": "Poland", "code": "PL" },
  { "name": "Portugal", "code": "PT" },
  { "name": "Puerto Rico", "code": "PR" },
  { "name": "Qatar", "code": "QA" },
  { "name": "Reunion", "code": "RE" },
  { "name": "Romania", "code": "RO" },
  { "name": "Russian Federation", "code": "RU" },
  { "name": "Rwanda", "code": "RW" },
  { "name": "Saint Helena", "code": "SH" },
  { "name": "Saint Kitts and Nevis", "code": "KN" },
  { "name": "Saint Lucia", "code": "LC" },
  { "name": "Saint Pierre and Miquelon", "code": "PM" },
  { "name": "Saint Vincent and the Grenadines", "code": "VC" },
  { "name": "Samoa", "code": "WS" },
  { "name": "San Marino", "code": "SM" },
  { "name": "Sao Tome and Principe", "code": "ST" },
  { "name": "Saudi Arabia", "code": "SA" },
  { "name": "Senegal", "code": "SN" },
  { "name": "Serbia and Montenegro", "code": "CS" },
  { "name": "Seychelles", "code": "SC" },
  { "name": "Sierra Leone", "code": "SL" },
  { "name": "Singapore", "code": "SG" },
  { "name": "Slovakia", "code": "SK" },
  { "name": "Slovenia", "code": "SI" },
  { "name": "Solomon Islands", "code": "SB" },
  { "name": "Somalia", "code": "SO" },
  { "name": "South Africa", "code": "ZA" },
  { "name": "South Georgia and the South Sandwich Islands", "code": "GS" },
  { "name": "Spain", "code": "ES" },
  { "name": "Sri Lanka", "code": "LK" },
  { "name": "Sudan", "code": "SD" },
  { "name": "Suriname", "code": "SR" },
  { "name": "Svalbard and Jan Mayen", "code": "SJ" },
  { "name": "Swaziland", "code": "SZ" },
  { "name": "Sweden", "code": "SE" },
  { "name": "Switzerland", "code": "CH" },
  { "name": "Syrian Arab Republic", "code": "SY" },
  { "name": "Taiwan", "code": "TW" },
  { "name": "Tajikistan", "code": "TJ" },
  { "name": "Tanzania, United Republic of", "code": "TZ" },
  { "name": "Thailand", "code": "TH" },
  { "name": "Timor-Leste", "code": "TL" },
  { "name": "Togo", "code": "TG" },
  { "name": "Tokelau", "code": "TK" },
  { "name": "Tonga", "code": "TO" },
  { "name": "Trinidad and Tobago", "code": "TT" },
  { "name": "Tunisia", "code": "TN" },
  { "name": "Turkey", "code": "TR" },
  { "name": "Turkmenistan", "code": "TM" },
  { "name": "Turks and Caicos Islands", "code": "TC" },
  { "name": "Tuvalu", "code": "TV" },
  { "name": "Uganda", "code": "UG" },
  { "name": "Ukraine", "code": "UA" },
  { "name": "United Arab Emirates", "code": "AE" },
  { "name": "United Kingdom", "code": "GB" },
  { "name": "United States", "code": "US" },
  { "name": "United States Minor Outlying Islands", "code": "UM" },
  { "name": "Uruguay", "code": "UY" },
  { "name": "Uzbekistan", "code": "UZ" },
  { "name": "Vanuatu", "code": "VU" },
  { "name": "Venezuela", "code": "VE" },
  { "name": "Vietnam", "code": "VN" },
  { "name": "Virgin Islands, British", "code": "VG" },
  { "name": "Virgin Islands, U.S.", "code": "VI" },
  { "name": "Wallis and Futuna", "code": "WF" },
  { "name": "Western Sahara", "code": "EH" },
  { "name": "Yemen", "code": "YE" },
  { "name": "Zambia", "code": "ZM" },
  { "name": "Zimbabwe", "code": "ZN" }
];

// app/components/DegreeForm.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function DegreeForm({
  onSubmit
}) {
  const { register, watch, control, handleSubmit } = useForm();
  const isCurrentlyStudying = watch("currentlyStudying");
  const { fields, append, remove } = useFieldArray({
    control,
    name: "accomplishments"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit(onSubmit), className: "mb-4 border-gray-500 border-solid rounded-md p-5 border-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "block mb-2 font-medium text-gray-700", children: "Degree" }, void 0, false, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "select",
      {
        id: "name",
        ...register("name", { required: true }),
        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select Degree" }, void 0, false, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "UG Diploma", children: "UG Diploma" }, void 0, false, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Bachelors", children: "Bachelors" }, void 0, false, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "PG Diploma", children: "PG Diploma" }, void 0, false, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Professional Degree", children: "Professional Degree" }, void 0, false, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Masters", children: "Masters" }, void 0, false, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 55,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "PhD or Doctoral Studies", children: "PhD or Doctoral Studies" }, void 0, false, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 45,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "field", className: "block mb-2 font-medium text-gray-700", children: "Field" }, void 0, false, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          id: "field",
          ...register("field", { required: true }),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        false,
        {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 63,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "country", className: "block mb-2 font-medium text-gray-700", children: "Country" }, void 0, false, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "select",
        {
          id: "country",
          ...register("country", { required: true }),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select Country" }, void 0, false, {
              fileName: "app/components/DegreeForm.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this),
            countries_default.map((country) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: country.name, children: country.name }, country.code, false, {
              fileName: "app/components/DegreeForm.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this))
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 75,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "university", className: "block mb-2 font-medium text gray-700", children: "University" }, void 0, false, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          id: "university",
          ...register("university", { required: true }),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        false,
        {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 93,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "started", className: "block mb-2 font-medium text-gray-700", children: "Start" }, void 0, false, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          id: "start",
          ...register("start", { required: true }),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        false,
        {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 105,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    !isCurrentlyStudying && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "end", className: "block mb-2 font-medium text-gray-700", children: "End" }, void 0, false, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "text",
          id: "end",
          ...register("end", { required: true }),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        },
        void 0,
        false,
        {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 117,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 113,
      columnNumber: 32
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          type: "checkbox",
          id: "currentlyStudying",
          ...register("currentlyStudying"),
          className: "mr-2"
        },
        void 0,
        false,
        {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 126,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "currentlyStudying", className: "font-medium text-gray-700", children: "Currently Studying Here" }, void 0, false, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 132,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
      fields.map((field, index) => {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "accomplishment", className: "block mb-2 font-medium text-gray-700", children: [
            "Accomplishment ",
            index + 1
          ] }, void 0, true, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 142,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "select",
            {
              id: "type",
              ...register(`accomplishments.${index}.type`, { required: true }),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select Accomplishment" }, void 0, false, {
                  fileName: "app/components/DegreeForm.tsx",
                  lineNumber: 150,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Thesis", children: "Thesis" }, void 0, false, {
                  fileName: "app/components/DegreeForm.tsx",
                  lineNumber: 151,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Patent", children: "Patent" }, void 0, false, {
                  fileName: "app/components/DegreeForm.tsx",
                  lineNumber: 152,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Published Work", children: "Published Work" }, void 0, false, {
                  fileName: "app/components/DegreeForm.tsx",
                  lineNumber: 153,
                  columnNumber: 19
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/DegreeForm.tsx",
              lineNumber: 145,
              columnNumber: 17
            },
            this
          ),
          field.type === "Thesis" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", className: "block mb-2 font-medium text-gray-700", children: "Title" }, void 0, false, {
              fileName: "app/components/DegreeForm.tsx",
              lineNumber: 159,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                id: "title",
                ...register(`accomplishments.${index}.title`, { required: true }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              },
              void 0,
              false,
              {
                fileName: "app/components/DegreeForm.tsx",
                lineNumber: 162,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 158,
            columnNumber: 21
          }, this),
          field.type === "Patent" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", className: "block mb-2 font-medium text-gray-700", children: "Title" }, void 0, false, {
              fileName: "app/components/DegreeForm.tsx",
              lineNumber: 175,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                id: "title",
                ...register(`accomplishments.${index}.title`, { required: true }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              },
              void 0,
              false,
              {
                fileName: "app/components/DegreeForm.tsx",
                lineNumber: 178,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 174,
            columnNumber: 21
          }, this),
          field.type === "Published Work" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", className: "block mb-2 font-medium text-gray-700", children: "Title" }, void 0, false, {
              fileName: "app/components/DegreeForm.tsx",
              lineNumber: 191,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                id: "title",
                ...register(`accomplishments.${index}.title`, { required: true }),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              },
              void 0,
              false,
              {
                fileName: "app/components/DegreeForm.tsx",
                lineNumber: 194,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/DegreeForm.tsx",
            lineNumber: 190,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/DegreeForm.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this);
      }),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => append({}, {
        shouldFocus: true
      }), className: "w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5", children: "Add an Accomplishment" }, void 0, false, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 207,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full text-center border-gray-400 rounded-md border-solid border-2 py-5", children: "Save" }, void 0, false, {
        fileName: "app/components/DegreeForm.tsx",
        lineNumber: 212,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/DegreeForm.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/DegreeForm.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/components/DegreeCard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function DegreeCard({ degree }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-4 border-gray-500 border-solid rounded-md p-5 border-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl font-bold", children: degree.name }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.field }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.country }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.university }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.start }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.end }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-bold", children: degree.currentlyStudying }, void 0, false, {
      fileName: "app/components/DegreeCard.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/DegreeCard.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/EducationForm.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var EducationForm = () => {
  const [profile, setProfile] = (0, import_react.useState)({
    degrees: []
  });
  const [addingDegree, setAddingDegree] = (0, import_react.useState)(false);
  const onSubmit = (data) => {
    setProfile({
      ...profile,
      degrees: [
        ...profile.degrees,
        data
      ]
    });
    setAddingDegree(false);
    console.log(profile);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full max-w-4xl mx-auto", children: [
    profile.degrees.map((degree, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DegreeCard, { degree }, index, false, {
      fileName: "app/components/EducationForm.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this)),
    !addingDegree && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => {
      setAddingDegree(true);
    }, className: "w-full text-center border-gray-400 rounded-md border-dashed border-2 py-5", children: "Add Degree" }, void 0, false, {
      fileName: "app/components/EducationForm.tsx",
      lineNumber: 36,
      columnNumber: 26
    }, this),
    addingDegree && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DegreeForm, { onSubmit }, void 0, false, {
      fileName: "app/components/EducationForm.tsx",
      lineNumber: 43,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/EducationForm.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
};
var EducationForm_default = EducationForm;

// app/routes/profile.education.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function profile_education_default() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(EducationForm_default, {}, void 0, false, {
    fileName: "app/routes/profile.education.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
export {
  profile_education_default as default
};
//# sourceMappingURL=/build/routes/profile.education-X52XZ7M6.js.map
