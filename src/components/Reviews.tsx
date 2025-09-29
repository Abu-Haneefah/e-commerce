import Image from "next/image";

const Reviews = async ({ productId }: { productId: string }) => {
  // MOCK THE REVIEW DATA
  const reviews = {
    data: [
      {
        id: "review1",
        rating: 5,
        customer: {
          avatar_url:
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          display_name: "Mock Customer 1",
        },
        heading: "Great Product!",
        body: "I love this product, it's exactly what I needed. Highly recommend it to everyone.",
        media: [
          {
            id: "media1",
            url: "https://images.pexels.com/photos/1039958/pexels-photo-1039958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
        ],
      },
      {
        id: "review2",
        rating: 4,
        customer: {
          avatar_url:
            "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          display_name: "Mock Customer 2",
        },
        heading: "Good but could be better",
        body: "The quality is good, but the color was slightly different than expected.",
        media: [],
      },
    ],
  };

  return reviews.data.map((review: any) => (
    <div className="flex flex-col gap-4" key={review.id}>
      {/* USER */}
      <div className="flex items-center gap-4 font-medium">
        <Image
          src={review.customer.avatar_url}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
        <span>{review.customer.display_name}</span>
      </div>
      {/* STARS */}
      <div className="flex gap-2">
        {Array.from({ length: review.rating }).map((_, index) => (
          <Image src="/star.png" alt="" key={index} width={16} height={16} />
        ))}
      </div>
      {/* DESC */}
      {review.heading && <p>{review.heading}</p>}
      {review.body && <p>{review.body}</p>}
      <div className="">
        {review.media.map((media: any) => (
          <Image
            src={media.url}
            key={media.id}
            alt=""
            width={100}
            height={50}
            className="object-cover"
          />
        ))}
      </div>
    </div>
  ));
};

export default Reviews;
