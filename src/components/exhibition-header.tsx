interface Props {
  className?: HTMLElement['className']
}

const ExhibitionHeader = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-[6px] text-primary-02 md:gap-[16px]">
        <div className="font-eulyoo1945 text-[28px] tracking-[-0.01em] md:text-[40px] lg:text-[72px]">
          41th
        </div>
        <div className="lg:text-web-body-02 font-pretendard text-[12px] tracking-[-0.02em] md:text-[16px]">
          Seoul Women’s University
          <br />
          Industrial Design Graduation Exhibition
        </div>
      </div>
    </div>
  )
}

export default ExhibitionHeader
