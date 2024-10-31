'use client'

export default function Custom404() {
  return (
    <div className="lg:text-web-body-01 text-body-01 flex h-[50vh] flex-col items-center justify-center gap-[12px] text-gray-50">
      <span className="text-center">
        알 수 없는 에러가 발생했어요.
        <br /> 잠시 후 다시 시도해주세요.
      </span>
      <button
        onClick={() => {
          window.location.reload()
        }}
        className="flex w-fit cursor-pointer items-center gap-[8px] border border-primary-02/50 bg-primary-02/20 px-mobile py-[12px] text-white transition-all hover:border-primary-02 hover:shadow-hovering_btn lg:py-[14.5px] lg:pl-[36px] lg:pr-[32px]"
      >
        <span className="lg:text-web-body-03 text-body-03">다시 시도하기</span>
      </button>
    </div>
  )
}
