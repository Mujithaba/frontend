import React, { useEffect, useState } from "react";
import ChangePassword from "../../Components/Common/ChangePasswordUser";
import UserDetails from "../../Components/User/UserDetails";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getUserInfo, updatePassword } from "../../api/user";
import { IStudentInfo } from "../../services/types";
import { toast } from "react-toastify";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("Your info");
  const [studentInfo, setStudentInfo] = useState<IStudentInfo | null>(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const { userInfo } = useSelector((state: RootState) => state.auth);
  const userId = userInfo._id as string;

  useEffect(() => {
    getStudentInfo();
  }, []);

  // Fetch student data
  const getStudentInfo = async () => {
    try {
      setLoading(true);
      const response = await getUserInfo(userId);
      if (response) {
        setStudentInfo(response?.data);
      }
    } catch (error) {
      console.error("Failed to fetch student info:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle password change
  const onChangePassword = async (currentPassword: string, newPassword: string) => {
    try {
      // Implement your password change logic here
      console.log("Current Password:", currentPassword);
      console.log("New Password:", newPassword);
      if (!userId) {
        console.error("User ID is missing.");
        return; 
      }
      const response = await updatePassword(userId, currentPassword, newPassword);
    
    if (response && response.status === 200) {
      toast.success("Password changed successfully")
      console.log("Password changed successfully.");
    } else {
      console.error("Failed to change password:", response?.data.message);
    }
  } catch (error) {
    console.error("Error while changing password:", error);
  }
};

  // const updatedUserData = (userData: IStudentInfo) => {
  //   setStudentInfo(userData);
  // };

  console.log(studentInfo,"studentInfo");
  

  return (
    <>
      <div className="w-full h-20 bg-gray-100"></div>
      

      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-1/4 bg-white border-r border-gray-300 p-4">
          {/* User Profile */}
          <div className="flex flex-col items-center mt-14 mb-28">
            <img
              src={
                studentInfo?.img && studentInfo.img !== "nopic"
                  ? studentInfo.img
                  : "https://via.placeholder.com/100"
              }
              alt="User Avatar"
              className="w-24 h-24 rounded-full mb-2"
            />
            <h2 className="text-xl font-semibold">{studentInfo?.name}</h2>
            <p className="text-gray-500">{studentInfo?.email}</p>
          </div>
          <hr className="bg-red-500 font-extrabold" />

          {/* Menu Items */}
          <ul className="space-y-2">
            {["Your info", "Change Password", "Enrolled Courses"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActiveTab(item)}
                  className={`w-full text-left px-4 py-2 rounded-md focus:outline-none ${
                    activeTab === item ? "bg-gray-300 font-bold" : "hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {loading && <div className="text-center">Loading...</div>}
          {!loading && activeTab === "Your info" && studentInfo && (
            <UserDetails
            userId={userId}
              name={studentInfo.name}
              email={studentInfo.email}
              phoneNumber={studentInfo.phone}
              profileImage={
                studentInfo?.img && studentInfo.img  !== "nopic"
                  ? studentInfo.img
                  : "https://via.placeholder.com/100"
              }
              // onSave={updatedUserData}
            />
          )}
          {activeTab === "Change Password" && (
            <ChangePassword currPassword ={studentInfo?.password ?? ''} onChangePassword={onChangePassword} />
          )}
        </div>
      </div>
    </>
  );
}
