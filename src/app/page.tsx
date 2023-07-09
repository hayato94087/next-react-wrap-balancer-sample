import Balancer from "react-wrap-balancer";

export const runtime = "edge"

export default function Home() {
  return (
    <main>
      <div className="mb-5 p-5">
        <h1 className="text-xl font-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          malesuada nisl ut vehicula tincidunt.
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry{"'"}s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="p-5">
        <h1 className="text-xl font-bold">
          <Balancer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            malesuada nisl ut vehicula tincidunt.
          </Balancer>
        </h1>
        <p>
          <Balancer>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry{"'"}s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Balancer>
        </p>
      </div>
    </main>
  );
}
