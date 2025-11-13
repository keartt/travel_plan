import {useNavigate} from "react-router-dom";
import {BoxLoading} from "./BoxLoading.jsx";

export const Error = ({ code, message }) => {
    const navigate = useNavigate();
    return (
      <section className="relative bg-white dark:bg-gray-800 min-h-screen flex items-start justify-center px-4 pt-30 overflow-hidden">
        {/* 배경으로 박스로딩 */}
        <div className="absolute inset-0 opacity-50 z-0 pt-90">
          <div className="h-full w-full flex items-center justify-center">
            <BoxLoading />
          </div>
        </div>

        {/* 내용물 (텍스트, 버튼) */}
        <div className="relative z-10 max-w-screen-sm text-center mx-auto">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            {code ?? "404"}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            {message ?? "오류가 발생했습니다."}
          </p>
          <a
            href="#"
            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            홈으로 돌아가기
          </a>
        </div>
      </section>
    );
}

export const Wait = ({title, subTitle}) => {
  return (
    <section className="relative flex min-h-screen items-start justify-center overflow-hidden bg-white px-4 pt-30 dark:bg-gray-800">
      {/* 배경으로 박스로딩 */}
      <div className="absolute inset-0 z-0 pt-30 opacity-80">
        <div className="flex h-full w-full items-center justify-center">
          <BoxLoading />
        </div>
      </div>

      {/* 내용물 (텍스트, 버튼) */}
      <div className="relative z-10 mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-primary-600 dark:text-primary-500">
          {title ?? "디지털 안전정보 통합관리 시스템"}
        </h1>
        <p className="mb-4 tracking-tight font-bold text-gray-900 text-2xl dark:text-white">
          {subTitle ?? "현재 시스템 준비 중입니다. 빠른 시일 내에 찾아뵙겠습니다."}
        </p>
      </div>
    </section>
  );
}