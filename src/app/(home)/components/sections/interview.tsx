import Section from '../section'

const Interview = () => {
  const interviews = Array.from({ length: 3 })

  return (
    <Section title="인터뷰" className="mt-[135px] md:mt-[135px] lg:mt-[366px]">
      <div className="mt-[10px] flex gap-[16px] overflow-x-scroll md:mt-[20px] lg:mt-[36px]">
        {interviews.map((interview, idx) => (
          <div
            key={idx}
            className="h-[154.5px] min-w-[230px] cursor-pointer border border-primary-02/70 md:h-[201.2px] md:min-w-[300px] lg:h-[360px] lg:min-w-0 lg:flex-1"
          ></div>
        ))}
      </div>
    </Section>
  )
}

export default Interview
