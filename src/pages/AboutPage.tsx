import { Title } from "../common/index";

const AboutPage = () => (
  <div>
    <div className="mx-auto flex w-11/12 flex-col gap-8 pt-12 text-white">
      <Title size="sm" className="font-Tektur">
        Learn more about Star Wars
      </Title>

      {Array.from({ length: 2 }).map((_, index: number) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint
          modi sunt facilis eius, fugit inventore dolorum, odit nesciunt, optio
          maiores quibusdam neque omnis quo delectus architecto. Voluptas,
          voluptates porro. Nemo fugit qui est, impedit aspernatur optio
          voluptas atque sequi perferendis minima dicta adipisci sunt quis in et
          praesentium! Veritatis optio porro magnam omnis mollitia explicabo
          illum reiciendis aut quisquam!
        </p>
      ))}
    </div>
  </div>
);

export default AboutPage;
