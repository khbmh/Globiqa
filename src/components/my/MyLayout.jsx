import { Outlet } from 'react-router';

function MyLayout() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center gap-6 my-10">
        <img
          src="https://www.wikihow.com/images/9/90/What_type_of_person_are_you_quiz_pic.png"
          alt=""
          className="w-[100px] h-[100px] rounded-badge object-cover"
        />
        <h1 className="-mt-4 font-semibold text-4xl">User Name</h1>
        <h5 className="-mt-4 text-base opacity-60">User@email.com</h5>
      </div>
      <Outlet />
    </div>
  );
}

export default MyLayout;
