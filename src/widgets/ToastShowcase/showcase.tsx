import { GridLayout } from "../_GridBase";

export function ToastShowcase() {
  return (
    <div className="h-full relative">
      <div className="absolute right-0 bottom-0">TEST</div>
      <GridLayout>
        <Container>
          <Button onClick={() => {}} />
        </Container>
      </GridLayout>
    </div>
  );
}

function Container({ children }: { children: React.ReactElement }) {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <button className="px-4 py-2 rounded-md bg-accent-9 hover:bg-accent-10 focus:bg-accent-10 text-grayscale-2">
      Click me
    </button>
  );
}
