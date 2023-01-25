import Head from "next/head";
import { HeadTitle } from "@/constants/textConstant";

type HeadTagPropsType = {
  content?: string;
};

const HeadTag = ({
  content = `${HeadTitle} - 짧은 호기심들을 웹으로 탄생시키는 곳 입니다. 틱톡, 쇼츠, 릴스 이제는 숏웹으로 공유하세요!`,
}: HeadTagPropsType) => {
  return (
    <Head>
      <title>{`${HeadTitle} - 짧은 호기심을 웹에 담다.`}</title>
      <meta name="description" content={`${HeadTitle} - ${content}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/short_web_logo.ico" />
    </Head>
  );
};

export default HeadTag;
