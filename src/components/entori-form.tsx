export function EntoriForm() {
  return (
    <>
      <form className="h-1/2 text-center">
        <label htmlFor="content" />
        <textarea
          className="w-full h-full border-2 rounded-md border-green-900/40 bg-yellow-100 mb-3 resize-none"
          id="content"
          placeholder="What's up today?"
          maxLength={500}
        />
        <button type="submit">Submit Entori</button>
      </form>
    </>
  );
}
