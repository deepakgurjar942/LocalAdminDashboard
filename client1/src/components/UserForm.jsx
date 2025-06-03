






// import React, { useState } from "react";

// export default function UserForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     lastName: "",
//     mobile: "+91",
//     aadhar: "",
//     address: "",
//     purpose: "",
//     fileNo: "",
//     fileLocation: "",
//     rack: "",
//     position: "",
//     concern: "",
//     aadharFile: null,
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!/^\+91\d{10}$/.test(formData.mobile)) newErrors.mobile = "Enter valid 10-digit mobile number";
//     if (!/^\d{12}$/.test(formData.aadhar)) newErrors.aadhar = "Enter valid 12-digit Aadhar number";
//     if (!formData.address.trim()) newErrors.address = "Address is required";
//     if (!formData.purpose.trim()) newErrors.purpose = "Purpose is required";
//     if (!formData.fileNo.trim()) newErrors.fileNo = "File number is required";
//     if (!formData.fileLocation.trim()) newErrors.fileLocation = "File location is required";
//     if (!formData.rack.trim()) newErrors.rack = "Rack is required";
//     if (!formData.position.trim()) newErrors.position = "Position is required";
//     if (!formData.concern.trim()) newErrors.concern = "Concern is required";
//    if (formData.aadharFile) {
//   if (formData.aadharFile.size > 500 * 1024) {
//     newErrors.aadharFile = "File must be less than 500KB";
//   }
// }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "aadharFile") {
//       setFormData((prev) => ({ ...prev, [name]: files[0] }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     setLoading(true);
//     try {
//       const payload = new FormData();
//       for (let key in formData) {
//         payload.append(key, formData[key]);
//       }

//       const response = await fetch("http://localhost:3000/submit", {
//         method: "POST",
//         body: payload,
//       });

//       if (!response.ok) throw new Error("Failed to submit form");

//       alert("Form submitted successfully!");

//       // Clear form
//       setFormData({
//         name: "",
//         lastName: "",
//         mobile: "+91",
//         aadhar: "",
//         address: "",
//         purpose: "",
//         fileNo: "",
//         fileLocation: "",
//         rack: "",
//         position: "",
//         concern: "",
//         aadharFile: null,
//       });
//       setErrors({});
//     } catch (error) {
//       console.error(error);
//       alert("Submission failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen p-6 transition-colors duration-300 bg-gray-100 hover:bg-gray-200">
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg"
//       >
//         <h2 className="mb-6 text-2xl font-bold text-center">User Registration Form</h2>

//         {/* First Name and Last Name */}
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//           <div>
//             <label className="block">First Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               placeholder="John"
//             />
//             {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
//           </div>
//           <div>
//             <label className="block">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               placeholder="Doe"
//             />
//             {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
//           </div>
//         </div>

//         {/* Mobile and Aadhar */}
//         <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
//           <div>
//             <label className="block">Mobile Number</label>
//             <input
//               type="text"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               placeholder="+91XXXXXXXXXX"
//             />
//             {errors.mobile && <p className="text-sm text-red-500">{errors.mobile}</p>}
//           </div>
//           <div>
//             <label className="block">Aadhar Number</label>
//             <input
//               type="text"
//               name="aadhar"
//               value={formData.aadhar}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               placeholder="123412341234"
//             />
//             {errors.aadhar && <p className="text-sm text-red-500">{errors.aadhar}</p>}
//           </div>
//         </div>

//         {/* Address and Purpose */}
//         <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
//           <div>
//             <label className="block">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               placeholder="123 Main Street"
//             />
//             {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
//           </div>
//           <div>
//             <label className="block">Purpose</label>
//             <input
//               type="text"
//               name="purpose"
//               value={formData.purpose}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               placeholder="Purpose of submission"
//             />
//             {errors.purpose && <p className="text-sm text-red-500">{errors.purpose}</p>}
//           </div>
//         </div>

//         {/* Aadhar File and File Number */}
//         <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
//           <div>
//             <label className="block">Aadhar Card File (PDF, JPG, PNG &lt; 500KB)</label>
//             <input
//               type="file"
//               name="aadharFile"
//               onChange={handleChange}
//               accept=".pdf,.jpg,.jpeg,.png"
//               className="w-full p-2 border rounded"
//             />
//             {errors.aadharFile && <p className="text-sm text-red-500">{errors.aadharFile}</p>}
//           </div>
//           <div>
//             <label className="block">File Number</label>
//             <input
//               type="text"
//               name="fileNo"
//               value={formData.fileNo}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               placeholder="F12345"
//             />
//             {errors.fileNo && <p className="text-sm text-red-500">{errors.fileNo}</p>}
//           </div>
//         </div>

//         {/* File Location and Rack */}
//         <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
//           <div>
//             <label className="block">File Location</label>
//             <input
//               type="text"
//               name="fileLocation"
//               value={formData.fileLocation}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               placeholder="Shelf 3"
//             />
//             {errors.fileLocation && <p className="text-sm text-red-500">{errors.fileLocation}</p>}
//           </div>
//           <div>
//             <label className="block">Rack</label>
//             <input
//               type="text"
//               name="rack"
//               value={formData.rack}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               placeholder="Rack 7"
//             />
//             {errors.rack && <p className="text-sm text-red-500">{errors.rack}</p>}
//           </div>
//         </div>

//         {/* Position and Concern */}
//         <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
//           <div>
//             <label className="block">Position</label>
//             <input
//               type="text"
//               name="position"
//               value={formData.position}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               placeholder="Position A"
//             />
//             {errors.position && <p className="text-sm text-red-500">{errors.position}</p>}
//           </div>
//           <div>
//             <label className="block">Concern</label>
//             <input
//               type="text"
//               name="concern"
//               value={formData.concern}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               placeholder="Concern Department"
//             />
//             {errors.concern && <p className="text-sm text-red-500">{errors.concern}</p>}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="mt-6 text-center">
//           <button
//             type="submit"
//             disabled={loading}
//             className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:bg-gray-400"
//           >
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
















import React, { useState } from "react";

export default function UserForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    mobile: "+91",
    aadhar: "",
    address: "",
    purpose: "",
    fileNo: "",
    fileLocation: "",
    rack: "",
    position: "",
    concern: "",
    aadharFile: null,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "First name is required";
    if (!formData.lastName.trim()) 
    if (!/^\+91\d{10}$/.test(formData.mobile)) newErrors.mobile = "Enter valid 10-digit mobile number";
    if (!/^\d{4}\d{4}\d{4}$/.test(formData.aadhar)) newErrors.aadhar = "Enter valid 12-digit Aadhar number";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.purpose.trim()) newErrors.purpose = "Purpose is required";
    if (!formData.fileNo.trim()) newErrors.fileNo = "File number is required";
    if (!formData.fileLocation.trim()) newErrors.fileLocation = "File location is required";
    if (!formData.rack.trim()) newErrors.rack = "Rack is required";
    if (!formData.position.trim()) newErrors.position = "Position is required";
    if (!formData.concern.trim()) newErrors.concern = "Concern is required";
    if (formData.aadharFile) {
  if (formData.aadharFile.size > 500 * 1024) {
    newErrors.aadharFile = "File must be less than 500KB";
  }
}


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "aadharFile") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData); // Send data to parent component
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        lastName: "",
        mobile: "+91",
        aadhar: "",
        address: "",
        purpose: "",
        fileNo: "",
        fileLocation: "",
        rack: "",
        position: "",
        concern: "",
        aadharFile: null,
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen p-6 transition-colors duration-300 bg-gray-100 hover:bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-lg"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">User Registration Form</h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block">First Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="John"
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label className="block">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Doe"
            />
            {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          <div>
            <label className="block">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="+91XXXXXXXXXX"
            />
            {errors.mobile && <p className="text-sm text-red-500">{errors.mobile}</p>}
          </div>
          <div>
            <label className="block">Aadhar Number</label>
            <input
              type="text"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="xxxx-xxxx-xxxx"
            />
            {errors.aadhar && <p className="text-sm text-red-500">{errors.aadhar}</p>}
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          <div>
            <label className="block">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="123 Main Street"
            />
            {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
          </div>
          <div>
            <label className="block">Purpose</label>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Purpose of submission"
            />
            {errors.purpose && <p className="text-sm text-red-500">{errors.purpose}</p>}
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          <div>
            <label className="block">Aadhar Card File (PDF, JPG, PNG &lt; 500KB)</label>
            <input
              type="file"
              name="aadharFile"
              onChange={handleChange}
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full p-2 border rounded"
            />
            {errors.aadharFile && (
              <p className="text-sm text-red-500">{errors.aadharFile}</p>
            )}
          </div>
          <div>
            <label className="block">File Number</label>
            <input
              type="text"
              name="fileNo"
              value={formData.fileNo}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="F12345"
            />
            {errors.fileNo && <p className="text-sm text-red-500">{errors.fileNo}</p>}
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          <div>
            <label className="block">File Location</label>
            <input
              type="text"
              name="fileLocation"
              value={formData.fileLocation}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Shelf 3"
            />
            {errors.fileLocation && (
              <p className="text-sm text-red-500">{errors.fileLocation}</p>
            )}
          </div>
          <div>
            <label className="block">Rack</label>
            <input
              type="text"
              name="rack"
              value={formData.rack}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Rack 7"
            />
            {errors.rack && <p className="text-sm text-red-500">{errors.rack}</p>}
          </div>
        </div>

        {/* Row 6 */}
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          <div>
            <label className="block">Position</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Position A"
            />
            {errors.position && (
              <p className="text-sm text-red-500">{errors.position}</p>
            )}
          </div>
          <div>
            <label className="block">Concern</label>
            <input
              type="text"
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Concern Department"
            />
            {errors.concern && <p className="text-sm text-red-500">{errors.concern}</p>}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
