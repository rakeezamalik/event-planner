interface ParamsProps {
  id: string;
}

interface EventPageProps {
  params: ParamsProps;
}

const getEvent = async (id: string) => {
  const res = await fetch("http://localhost:4000/events/" + id, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
};

export default function EventPage({ params }: EventPageProps) {
  // This component will essentially be the Event Modal

  const { id } = params;

  return (
    <div>
      <h1>Your Event</h1>
      {id}
    </div>
  );
}
