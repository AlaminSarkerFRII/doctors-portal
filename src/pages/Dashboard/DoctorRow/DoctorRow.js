import React from "react";
import { toast } from "react-toastify";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";

const DoctorRow = ({ doctor, index, refetch }) => {
  const { name, specialty, img, email } = doctor;

  const handleDeleted = () => {
    fetch(`https://polar-fjord-97375.herokuapp.com/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (
          data.deletedCount &&
          window.confirm("Are you sure want to delete?")
        ) {
          toast.success(`Doctor:${name} is Deleted Successfully`);
          refetch();
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded-full">
            <img src={img} alt="" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <div className="flex justify-center items-center w-full">
          <button onClick={() => handleDeleted(email)}>
            <RiDeleteBin6Line
              title="Delete"
              className="mr-4 text-2xl text-error font-bold"
            />
          </button>
          <button>
            <FaUserEdit
              title="Edit"
              className="text-2xl text-error font-bold"
            />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DoctorRow;
