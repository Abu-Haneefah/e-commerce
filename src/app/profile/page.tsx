import Link from "next/link";
import { format } from "timeago.js";

const ProfilePage = () => {
  // MOCK THE USER AND ORDERS DATA
  const user = {
    member: {
      contactId: "12345678-abcd-efgh-ijkl-9876543210ab",
      profile: {
        nickname: "mock_user",
      },
      contact: {
        firstName: "Mock",
        lastName: "User",
        phones: ["+1234567890"],
      },
      loginEmail: "mockuser@example.com",
    },
  };

  const orderRes = {
    orders: [
      {
        _id: "order12345abc",
        priceSummary: {
          subtotal: { amount: 50.0 },
        },
        _createdDate: "2025-09-29T10:00:00Z",
        status: "PAID",
      },
      {
        _id: "order67890def",
        priceSummary: {
          subtotal: { amount: 125.75 },
        },
        _createdDate: "2025-09-28T15:30:00Z",
        status: "DELIVERED",
      },
      {
        _id: "order11223ghij",
        priceSummary: {
          subtotal: { amount: 30.5 },
        },
        _createdDate: "2025-09-27T08:45:00Z",
        status: "PENDING",
      },
    ],
  };

  if (!user.member?.contactId) {
    return <div className="">Not logged in!</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-24 md:h-[calc(100vh-180px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl">Profile</h1>
        <form className="mt-12 flex flex-col gap-4">
          <input type="text" hidden name="id" value={user.member.contactId} />
          <label className="text-sm text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.member?.profile?.nickname || "john"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder={user.member?.contact?.firstName || "John"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">Surname</label>
          <input
            type="text"
            name="lastName"
            placeholder={user.member?.contact?.lastName || "Doe"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={
              (user.member?.contact?.phones &&
                user.member?.contact?.phones[0]) ||
              "+1234567"
            }
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <label className="text-sm text-gray-700">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder={user.member?.loginEmail || "john@gmail.com"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-96"
          />
          <button className="rounded-md bg-lama text-white py-2 px-4 max-w-96">
            Update
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl">Orders</h1>
        <div className="mt-12 flex flex-col">
          {orderRes.orders.map((order) => (
            <Link
              href={`/orders/${order._id}`}
              key={order._id}
              className="flex justify-between px-2 py-6 rounded-md hover:bg-green-50 even:bg-slate-100"
            >
              <span className="w-1/4">{order._id?.substring(0, 10)}...</span>
              <span className="w-1/4">
                ${order.priceSummary?.subtotal?.amount}
              </span>
              {order._createdDate && (
                <span className="w-1/4">{format(order._createdDate)}</span>
              )}
              <span className="w-1/4">{order.status}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
