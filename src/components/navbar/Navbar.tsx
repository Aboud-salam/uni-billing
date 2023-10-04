import uni from "@/assets/title.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-primary-500 text-white h-[90px] w-5/6 mx-auto py-2">
      <div className="flex">
        <div className="image mx-3">
          <img src={uni} alt="" />
        </div>
        <div className="flex gap-4 ">
          <div className="info flex gap-1">
            <p className="main-data"> بوابة الطالب أهلاً وسهلا بك : </p>
            <span className="sec-data">عبد الرحمن أحمد أحمد عبد السلام</span>
          </div>
          <div className="info flex gap-1">
            <p className="main-data"> كلية : </p>
            <span className="sec-data"> الآداب والعلوم الإنسانية</span>
          </div>
          <div className="info flex gap-1">
            <p className="main-data">قسم : </p>
            <span className="sec-data">اللغة الانجليزية فرعي فرنسي</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="mt-5 px-5">20201341</p>
        <a href="http://std.alazhar.edu.ps/" className="sec-data pl-20">
          تسجيل الخروج
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
