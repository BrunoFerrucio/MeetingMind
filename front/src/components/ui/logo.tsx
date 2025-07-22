export function CompanyName() {
  return (
    <p className="text-2xl font-bold text-gray-900">
      <span className="text-[#291C84]">Meeting</span>
      <span className="text-black">MIND</span>
    </p>
  );
}

export function LogoAndName() {
  return (
    <div className="flex items-center space-x-2">
      <img
        src="/assets/logo/icon-text-horizontal.svg"
        alt="Company Logo"
        className="h-8"
      />
    </div>
  );
}