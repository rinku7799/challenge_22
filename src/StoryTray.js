export default function StoryTray({ stories }) {
  const storiesPlaceholder = [
    ...stories,
    {
      id: "create",
      label: "Create Story"
    }
  ];

  return (
    <ul>
      {storiesPlaceholder.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
