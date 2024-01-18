import React from "react";
import CustomTranslation from "@site/src/util/CustomTranslation";
import i18n from "@generated/i18n";
import clsx from "clsx";

export default function AboutXPLAAcademy(): JSX.Element {
  return (
    <section className="min-[997px]:h-[920px] max-[996px]:py-[20px] px-[20px] bg-[#004FFF] flex justify-center items-center">
      <div className="max-w-[1180px] w-full flex flex-col justify-center items-start">
        <div className="font-bold text-[50px] leading-[60px] text-white mb-[18px]">
          About XPLA ACADEMY
        </div>
        <div className="font-normal text-[28px] leading-[36px] text-[#46E9FC] mb-[105px]">
          <span
            className={clsx({
              "font-semibold leading-[38px]": i18n.currentLocale === "ko-kr",
            })}
          >
            <CustomTranslation
              en="Education hub for building XPLA-linked Web3 projects."
              kr="XPLA ACADEMY에서 제공하는 Web3 가이드를 통해,"
            />
          </span>
          <br />
          <span
            className={clsx({
              "font-semibold leading-[38px]": i18n.currentLocale === "ko-kr",
            })}
          >
            <CustomTranslation
              en="Easy to follow guides and free source codes."
              kr="누구나 쉽게 XPLA에 온보딩할 수 있습니다."
            />
          </span>
        </div>
        <div className="w-full flex max-[996px]:flex-col gap-[80px] items-center ">
          <img
            src="/img/AboutXPLAAcademy/venn_diagram.svg"
            alt="venn_diagram"
          />

          <div>
            <div className="text-[40px] leading-[48px] text-[#C9FF00] font-bold mb-[16px]">
              Start Learning
            </div>
            <div
              className={clsx(" leading-[38px]  text-white mb-[4px]", {
                "font-semibold text-[29px]": i18n.currentLocale === "en",
                "font-bold text-[24px]": i18n.currentLocale === "ko-kr",
              })}
            >
              <CustomTranslation
                en="Connect XPLA to your project."
                kr="Code Along 형식으로 제공되는 개발 튜토리얼입니다."
              />
            </div>
            <div
              className={clsx(
                "font-normal leading-[38px] text-white mb-[70px]",
                {
                  "text-[29px]": i18n.currentLocale === "en",
                  "text-[24px] min-[1250px]:whitespace-nowrap":
                    i18n.currentLocale === "ko-kr",
                }
              )}
            >
              <CustomTranslation
                en="Add Web3 features by following the Code Along Guide."
                kr="단계별 가이드를 따라서 XPLA의 Web3 기능을 구축할 수 있습니다."
              />
            </div>
            <div className="text-[#46E9FC] text-[40px] leading-[48px] font-bold mb-[20px]">
              Try Demo
            </div>
            <div
              className={clsx("text-white  leading-[38px] mb-[6px]", {
                "font-semibold text-[29px]": i18n.currentLocale === "en",
                "font-bold text-[24px]": i18n.currentLocale === "ko-kr",
              })}
            >
              <CustomTranslation
                en="Interact with the Demo projects."
                kr="XPLA의 Web3 서비스를 Demo 프로젝트로 체험할 수 있습니다."
              />
            </div>
            <div
              className={clsx("text-white   font-normal", {
                "leading-[34px] text-[29px]": i18n.currentLocale === "en",
                "text-[24px] min-[1250px]:whitespace-nowrap text-[24px] leading-[38px]":
                  i18n.currentLocale === "ko-kr",
              })}
            >
              <CustomTranslation
                en="Everything built from Start Learning content!"
                kr="Start Learning의 내용을 프로젝트로 구현하고 소스코드를 제공합니다."
              />
            </div>
            <div
              className={clsx(
                "relative text-white  leading-[34px] font-normal",
                {
                  "text-[29px]": i18n.currentLocale === "en",
                  "text-[24px] min-[1250px]:whitespace-nowrap":
                    i18n.currentLocale === "ko-kr",
                }
              )}
            >
              <CustomTranslation en="From Web3 Game Project to" kr="Game과" />{" "}
              <span
                className={clsx("text-[#FAED00] inline-flex items-start", {
                  "font-bold ": i18n.currentLocale === "en",
                  "font-medium ": i18n.currentLocale === "ko-kr",
                })}
              >
                Web3 Gaming Ops
                <span className="mt-[3px] font-normal text-[16px] leading-[16px]">
                  *&nbsp;
                </span>
              </span>
              <CustomTranslation
                en=""
                kr="를 통해 XPLA의 개발 환경을 확인하세요."
              />
              {i18n.currentLocale === "ko-kr" && (
                <br className="min-[2000px]:hidden" />
              )}
              <span className={
                clsx("text-[#FAED00]  whitespace-nowrap font-normal ", {
                  "text-[16px] leading-[34px] min-[1676px]:mt-[3px] min-[1676px]:absolute " : i18n.currentLocale === "en",
                  "text-[20px] leading-[34px]" : i18n.currentLocale === "ko-kr",

                })
              }>
                <CustomTranslation
                  en="(A tool for managing Web3 assets)"
                  kr="(게임 연동 Web3 툴 서비스)"
                />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
