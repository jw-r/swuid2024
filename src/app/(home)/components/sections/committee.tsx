import Section from '../section'

const charges = [
  {
    role: '위원장',
    name: '조수민',
  },
  {
    role: '부위원장',
    name: '고은지',
  },
]
const committees = [
  {
    department: '기획',
    leader: '정예승',
    members: <span>강지은 윤주하 문가희</span>,
  },
  {
    department: '홍보',
    leader: '지예성',
    members: <span>공성연 전예지 허찬비 이지은</span>,
  },
  {
    department: '웹',
    leader: '송의진',
    members: <span>김채원 이서영 우규리 조수빈 황자경</span>,
  },
  {
    department: '도록',
    leader: '박은아',
    members: <span>김유진 신주은 이가연 이소연 홍수정</span>,
  },
  {
    department: '사진',
    leader: '김소은',
    members: <span>천유정 김소은 유주하</span>,
  },
  {
    department: '인테리어',
    leader: '이수현',
    members: (
      <span>
        고경희 김지현 박수연 박인애
        <br className="md:hidden" /> 오유진 이지은 이혜인 황예린
      </span>
    ),
  },
  {
    department: '포스터',
    leader: '박이은',
    members: <span>정다은 장윤서 정가윤 반유진</span>,
  },
]

const Committee = () => {
  return (
    <Section
      title="2024 졸업준비위원회"
      className="mb-[67.5px] mt-[135px] md:my-[150px] lg:my-[240px]"
    >
      <div className="mt-[22px] flex gap-[20px] lg:mt-[95px] lg:gap-[133px]">
        {charges.map(({ role, name }) => (
          <div key={role} className="flex gap-[12px] lg:gap-[21px]">
            <span className="text-subtitle-02 lg:text-web-subtitle-03">{role}</span>
            <span className="text-body-02 lg:text-web-body-02">{name}</span>
          </div>
        ))}
      </div>
      <div className="my-[22px] h-px w-full bg-white/70 lg:mb-[67px] lg:mt-[63px]" />
      <div className="grid grid-cols-1 gap-[24px] md:grid-cols-3">
        {committees.map((committee) => (
          <div key={committee.department} className="flex gap-[12px] lg:gap-[20px]">
            <div className="text-subtitle-02 lg:text-web-subtitle-03 w-[48px] shrink-0 lg:w-[83px]">
              {committee.department}
            </div>
            <div className="text-body-02 lg:text-web-body-02 flex flex-col">
              <div>팀장 {committee.leader}</div>
              <div>{committee.members}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Committee
