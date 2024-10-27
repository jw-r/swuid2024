type Project = {
  id: number
  type: 'UX' | 'DF' | 'BX'
  order?: number
  members: { name: string; classNumber: string }[]
  name: string
  description?: string
  teamName: string | null
  thumbnail: string
  banner: string
  assets: (
    | { type: 'image'; src: string }
    | { type: 'vimeo'; link: string }
    | { type: 'video'; src: string }
  )[]
}

export const projects: Project[] = [
  // UX
  {
    id: 1,
    order: 11,
    type: 'UX' as const,
    members: [
      { name: '김지현', classNumber: '2021111430' },
      { name: '박인애', classNumber: '2020111436' },
      { name: '전예지', classNumber: '2021120106' },
      { name: '황예린', classNumber: '2021111456' },
    ],
    name: '소솜',
    description: `바쁜 일상 속에서 우연한 경험을 통해 자신을 기록하고 주체적인 삶을 찾아가도록 돕는 서비스.
    ‘소솜'은 자신을 돌아볼 여유가 없는 사람들에게 자신이 무엇을 좋아하고 어떤 사람인지 우연한 경험을 통해 기록하고 추억하며 자신의 이야기를 만들어 나아갈 수 있게 도와줍니다.
    
    Amid a busy life, 'Sosom' is a service that helps individuals discover themselves through serendipitous experiences, empowering them to create a life of their own. For those with little time for self-reflection, Sosom enables them to record, reminisce, and build their personal story by capturing moments that reveal what they truly enjoy and who they are.`,
    teamName: '2월의 춘',
    thumbnail: '/projects/1/thumbnail.webp',
    banner: '/projects/1/banner.webp',
    assets: [
      { type: 'image', src: '/projects/1/main/1.webp' },
      { type: 'image', src: '/projects/1/main/2.webp' },
      { type: 'image', src: '/projects/1/main/3.webp' },
      { type: 'image', src: '/projects/1/main/4.webp' },
      { type: 'image', src: '/projects/1/main/5.webp' },
      { type: 'image', src: '/projects/1/main/6.webp' },
      { type: 'image', src: '/projects/1/main/7.webp' },
      { type: 'image', src: '/projects/1/main/8.webp' },
      { type: 'image', src: '/projects/1/main/9.webp' },
      { type: 'image', src: '/projects/1/main/10.webp' },
      { type: 'image', src: '/projects/1/main/11.webp' },
      { type: 'image', src: '/projects/1/main/12.webp' },
      { type: 'image', src: '/projects/1/main/13.webp' },
      { type: 'image', src: '/projects/1/main/14.webp' },
      { type: 'image', src: '/projects/1/main/15.webp' },
      { type: 'image', src: '/projects/1/main/16.webp' },
      { type: 'image', src: '/projects/1/main/17.webp' },
      { type: 'image', src: '/projects/1/main/18.webp' },
      { type: 'image', src: '/projects/1/main/19.webp' },
    ],
  },
  {
    id: 2,
    type: 'UX' as const,
    order: 8,
    members: [
      { name: '이가연', classNumber: '2020111444' },
      { name: '이소연', classNumber: '2020111446' },
      { name: '홍수정', classNumber: '2020111458' },
    ],
    name: '모멘타임(Momentime)',
    description: `현재 내 행동에 대한 미래가 막연하게 느껴지시나요?
    지금, '모멘타임(momentime)과 함께 시간여행을 떠나보세요!
    흥미로운 여정을 통해 현재의 작은 행동이 앞으로 어떤 큰 변화를 만들어낼지 직접 확인할 수 있습니다.
    더불어, [모멘텀]이라는 실천 가능한 행동 챌린지를 통해 일상 속에서 쉽게 더 나은 미래를 만들어갈 기회를 잡아보세요.
    
    Does the future feel uncertain due to your current actions?
    Now, embark on a time travel journey with 'Momentime'!
    Through an exciting journey, you can see firsthand how small actions today can lead to significant changes in the future.
    Additionally, seize the opportunity to create a better future in your daily life through [Momentum], an actionable challenge that’s easy to implement.`,
    teamName: '공릉동특공대',
    thumbnail: '/projects/2/thumbnail.webp',
    banner: '/projects/2/banner.webp',
    assets: [
      { type: 'image', src: '/projects/2/main/1.webp' },
      { type: 'vimeo', link: 'https://vimeo.com/1023187568?share=copy' },
      { type: 'image', src: '/projects/2/main/3.webp' },
      { type: 'image', src: '/projects/2/main/4.webp' },
      { type: 'image', src: '/projects/2/main/5.webp' },
      { type: 'image', src: '/projects/2/main/6.webp' },
      { type: 'image', src: '/projects/2/main/7.webp' },
      { type: 'image', src: '/projects/2/main/8.webp' },
      { type: 'image', src: '/projects/2/main/9.webp' },
      { type: 'image', src: '/projects/2/main/10.webp' },
      { type: 'image', src: '/projects/2/main/11.webp' },
      { type: 'image', src: '/projects/2/main/12.webp' },
      { type: 'image', src: '/projects/2/main/13.webp' },
      { type: 'image', src: '/projects/2/main/14.webp' },
      { type: 'image', src: '/projects/2/main/15.webp' },
      { type: 'image', src: '/projects/2/main/16.webp' },
      { type: 'image', src: '/projects/2/main/17.webp' },
      { type: 'image', src: '/projects/2/main/18.webp' },
      { type: 'image', src: '/projects/2/main/19.webp' },
    ],
  },
  {
    id: 3,
    order: 9,
    type: 'UX' as const,
    members: [
      { name: '반유진', classNumber: '2021111438' },
      { name: '정가윤', classNumber: '2021111448' },
      { name: '정다은', classNumber: '2021111449' },
      { name: '천유정', classNumber: '2019111455' },
    ],
    name: 'set-up : 하루하루 해가 뜨고 질 때까지',
    description: `set-up은 일과 휴식을 명확히 분리해 균형 잡힌 생활을 돕는 서비스입니다. 환경 단서를 통해 일의 끝과 휴식의 시작을 인식하게 하여, 일할 때는 집중하고 쉴 때는 온전히 휴식할 수 있도록 구분해줍니다. 마치 파자마로 갈아입고 차를 마시는 습관이 휴식의 시작을 알리는 신호가 되는 것처럼 말이죠. 이를 통해 일과 휴식이 조화롭게 연결된, 지속 가능한 갓생을 살 수 있도록 돕습니다.

    Set-up is a service that helps you live a balanced life by clearly separating work and rest. It helps you quickly immerse yourself in work and rest through environmental cues.`,
    teamName: '달큰걸즈',
    thumbnail: '/projects/3/thumbnail.webp',
    banner: '/projects/3/banner.webp',
    assets: [
      { type: 'image', src: '/projects/3/main/1.webp' },
      { type: 'image', src: '/projects/3/main/3.webp' },
      { type: 'image', src: '/projects/3/main/4.webp' },
      { type: 'image', src: '/projects/3/main/5.webp' },
      { type: 'image', src: '/projects/3/main/6.webp' },
    ],
  },
  {
    id: 4,
    type: 'UX' as const,
    order: 2,
    members: [
      { name: '신주은', classNumber: '2020111438' },
      { name: '이혜인', classNumber: '2020111449' },
    ],
    name: 'Très Bion!(트리비온) : 지속가능한 패션산업 활성화 서비스',
    description: `지속가능한 패션은 우리의 미래를 위해 추구해야할 패션입니다.
    작은 마을과 같은 Très Bion! 에서 교류하고, 경험하고, 참여하고 공유하며 다른 사용자들과 연결되어보세요!
    작은소비 및 업사이클링 커스텀 실천을 통해 환경보호와 가치소비까지 연결되는 서비스입니다.
    Très Bion은 지속가능한 패션을 기반으로한 브랜드, 커뮤니티 , DIY 제작 등의
    경험을 제공하는 패션산업 활성화 서비스입니다.
    
    Sustainable fashion is the fashion we should pursue for our future.
    Interact, experience, engage, share, and connect with other users at Très Bion!, such as a small town!
    `,
    teamName: '듀얼크루',
    thumbnail: '/projects/4/thumbnail.webp',
    banner: '/projects/4/banner.webp',
    assets: [
      { type: 'image', src: '/projects/4/main/1.webp' },
      { type: 'image', src: '/projects/4/main/2.webp' },
      { type: 'image', src: '/projects/4/main/3.webp' },
      { type: 'image', src: '/projects/4/main/4.webp' },
      { type: 'image', src: '/projects/4/main/5.webp' },
      { type: 'image', src: '/projects/4/main/6.webp' },
      { type: 'image', src: '/projects/4/main/7.webp' },
      { type: 'image', src: '/projects/4/main/8.webp' },
      { type: 'image', src: '/projects/4/main/9.webp' },
      { type: 'image', src: '/projects/4/main/10.webp' },
      { type: 'image', src: '/projects/4/main/11.webp' },
      { type: 'image', src: '/projects/4/main/12.webp' },
    ],
  },
  {
    id: 5,
    type: 'UX' as const,
    order: 6,
    members: [
      { name: '고경희', classNumber: '2020111421' },
      { name: '고은지', classNumber: '2020111423' },
      { name: '김유진', classNumber: '2020111425' },
      { name: '박은아', classNumber: '2020111435' },
    ],
    name: 'STOREET',
    description: `사용자의 취향을 바탕으로 장소와 활동을 추천하여, 일상 속에서 새로운 경험을 발견하고 취향을 확장해 나갈 수 있도록 돕는 서비스입니다. 여러분이 방문한 장소와 그곳에서의 활동을 통해 자신만의 취향을 확장해보세요!`,
    teamName: '막둥이',
    thumbnail: '/projects/5/thumbnail.webp',
    banner: '/projects/5/banner.webp',
    assets: [
      { type: 'image', src: '/projects/5/main/1.webp' },
      { type: 'vimeo', link: 'https://vimeo.com/1023139721?share=copy#t=0' },
      { type: 'image', src: '/projects/5/main/3.webp' },
      { type: 'image', src: '/projects/5/main/4.webp' },
      { type: 'image', src: '/projects/5/main/5.webp' },
      { type: 'image', src: '/projects/5/main/6.webp' },
      { type: 'image', src: '/projects/5/main/7.webp' },
      { type: 'image', src: '/projects/5/main/8.webp' },
      { type: 'image', src: '/projects/5/main/9.webp' },
      { type: 'image', src: '/projects/5/main/10.webp' },
    ],
  },
  {
    id: 6,
    type: 'UX' as const,
    order: 1,
    members: [
      { name: '김채원', classNumber: '2020111427' },
      { name: '우규리', classNumber: '2020111442' },
      { name: '이서영', classNumber: '2020111445' },
      { name: '조수빈', classNumber: '2020111455' },
    ],
    name: '커밋티',
    description: `커밋티는 AI기반의 다자간 커뮤니케이션 서비스로 서로의 상황을 이해하고, 고려하며 대화 가능한 서비스입니다. 영상통화, 메신저 등 다양한 형식의 대화에서 동일한 하나의 생성형AI가 다수에게 도움이 될 수 있습니다. 나만을 위했던 생성형AI가 아닌, 이제는 동시에 실시간으로 우리 모두를 돕는 생성형AI를 사용해보세요. 회의는 간단하게, 합의는 수월하게, 관계는 돈독하게 다자간의 대화 속에서 좋은 경험을 만들어가요.`,
    teamName: '세컨아워',
    thumbnail: '/projects/6/thumbnail.webp',
    banner: '/projects/6/banner.webp',
    assets: [
      { type: 'image', src: '/projects/6/main/1.webp' },
      { type: 'image', src: '/projects/6/main/2.webp' },
      { type: 'image', src: '/projects/6/main/3.webp' },
      { type: 'image', src: '/projects/6/main/4.webp' },
      { type: 'image', src: '/projects/6/main/5.webp' },
      { type: 'image', src: '/projects/6/main/6.webp' },
      { type: 'image', src: '/projects/6/main/7.webp' },
      { type: 'image', src: '/projects/6/main/8.webp' },
      { type: 'image', src: '/projects/6/main/9.webp' },
      { type: 'image', src: '/projects/6/main/10.webp' },
      { type: 'image', src: '/projects/6/main/11.webp' },
      { type: 'image', src: '/projects/6/main/12.webp' },
      { type: 'image', src: '/projects/6/main/13.webp' },
      { type: 'image', src: '/projects/6/main/14.webp' },
      { type: 'image', src: '/projects/6/main/15.webp' },
      { type: 'image', src: '/projects/6/main/16.webp' },
      { type: 'image', src: '/projects/6/main/17.webp' },
      { type: 'image', src: '/projects/6/main/18.webp' },
      { type: 'image', src: '/projects/6/main/19.webp' },
      { type: 'image', src: '/projects/6/main/20.webp' },
      { type: 'image', src: '/projects/6/main/21.webp' },
      { type: 'image', src: '/projects/6/main/22.webp' },
      { type: 'image', src: '/projects/6/main/23.webp' },
      { type: 'image', src: '/projects/6/main/24.webp' },
    ],
  },
  {
    id: 7,
    type: 'UX' as const,
    order: 10,
    members: [
      { name: '박수연', classNumber: '2020111434' },
      { name: '유주하', classNumber: '2021111443' },
      { name: '조수민', classNumber: '2020111454' },
      { name: '황자경', classNumber: '2020111460' },
    ],
    name: 'WILLO',
    description: `WILLO는 일상 속에서 자연스럽게 관심을 갖게 되는 다양한 주제를 바탕으로, 
    사용자가 손쉽게 참여할 수 있는 사회적 가치 활동 미션을 제안하는 서비스입니다. 
    우리는 서비스를 통해 한 사람 한 사람의 작은 행동들이 모여 더 큰 사회적 변화를 이끌어낼 수 있도록 돕고자 합니다. 
    WILLO와 함께라면 누구나 쉽게 일상 속에서 사회적 가치를 창출하고, 더 나은 세상을 만드는 데 도움이 될 수 있습니다.`,
    teamName: '쉼표',
    thumbnail: '/projects/7/thumbnail.webp',
    banner: '/projects/7/banner.webp',
    assets: [],
  },
  {
    id: 8,
    type: 'UX' as const,
    order: 3,
    members: [
      { name: '강지은', classNumber: '2020111419' },
      { name: '윤주하', classNumber: '2018111439' },
      { name: '오유진', classNumber: '2020111440' },
      { name: '정예승', classNumber: '2020111526' },
    ],
    name: 'MOAA : 작은 행동이 큰 변화로 이어지는 순간',
    description: `“과연 내가 하는 작은 실천들이 세상에 의미 있는 변화를
    가져올까?”라는 의문 가져본 적 있지 않으신가요?
    MOAA는 그 의문을 해소하려는 데서 출발했습니다.
    
    Make Our Action Arise
    
    사소하게 느껴지는 일상 속 작은 실천들을 모아,
    개인이 실현하기 어려운 사회적 활동으로 전환시켜
    세상을 긍정적으로 변화시키는 서비스입니다.`,
    teamName: '스물다섯 스물셋',
    thumbnail: '/projects/8/thumbnail.webp',
    banner: '/projects/8/banner.webp',
    assets: [
      { type: 'image', src: '/projects/8/main/1.webp' },
      { type: 'vimeo', link: 'https://vimeo.com/1023292879?share=copy#t=0' },
      { type: 'image', src: '/projects/8/main/3.webp' },
      { type: 'image', src: '/projects/8/main/4.webp' },
      { type: 'image', src: '/projects/8/main/5.webp' },
      { type: 'image', src: '/projects/8/main/6.webp' },
      { type: 'image', src: '/projects/8/main/7.webp' },
      { type: 'image', src: '/projects/8/main/8.webp' },
      { type: 'image', src: '/projects/8/main/9.webp' },
      { type: 'image', src: '/projects/8/main/10.webp' },
      { type: 'image', src: '/projects/8/main/11.webp' },
      { type: 'image', src: '/projects/8/main/12.webp' },
      { type: 'image', src: '/projects/8/main/13.webp' },
      { type: 'image', src: '/projects/8/main/14.webp' },
      { type: 'image', src: '/projects/8/main/15.webp' },
      { type: 'image', src: '/projects/8/main/16.webp' },
      { type: 'image', src: '/projects/8/main/17.webp' },
      { type: 'image', src: '/projects/8/main/18.webp' },
      { type: 'image', src: '/projects/8/main/19.webp' },
      { type: 'image', src: '/projects/8/main/20.webp' },
      { type: 'image', src: '/projects/8/main/21.webp' },
      { type: 'image', src: '/projects/8/main/22.webp' },
      { type: 'image', src: '/projects/8/main/23.webp' },
      { type: 'image', src: '/projects/8/main/24.webp' },
    ],
  },
  {
    id: 9,
    type: 'UX' as const,
    order: 7,
    members: [
      { name: '김소은', classNumber: '2019111419' },
      { name: '박이은', classNumber: '2021120105' },
      { name: '이지은', classNumber: '2020111447' },
      { name: '이지은', classNumber: '2020111448' },
    ],
    name: 'LocalLink(로컬링크)',
    description: `로컬링크는 현지인의 데이터와 시간을 바탕으로 한 소외 지역의 정보를
    여행 코스로 제공하고, 방문객이 스스로에게 알맞은 코스를 소비함으로써 
    소외된 지역의 활성화에 기여하는 서비스입니다.`,
    teamName: '은포',
    thumbnail: '/projects/9/thumbnail.webp',
    banner: '/projects/9/banner.webp',
    assets: [
      { type: 'image', src: '/projects/9/main/1.webp' },
      { type: 'image', src: '/projects/9/main/2.webp' },
      { type: 'image', src: '/projects/9/main/3.webp' },
      { type: 'image', src: '/projects/9/main/4.webp' },
      { type: 'image', src: '/projects/9/main/5.webp' },
      { type: 'image', src: '/projects/9/main/6.webp' },
      { type: 'image', src: '/projects/9/main/7.webp' },
      { type: 'image', src: '/projects/9/main/8.webp' },
      { type: 'image', src: '/projects/9/main/9.webp' },
      { type: 'image', src: '/projects/9/main/10.webp' },
      { type: 'image', src: '/projects/9/main/11.webp' },
      { type: 'image', src: '/projects/9/main/12.webp' },
      { type: 'image', src: '/projects/9/main/13.webp' },
      { type: 'image', src: '/projects/9/main/14.webp' },
      { type: 'image', src: '/projects/9/main/15.webp' },
      { type: 'image', src: '/projects/9/main/16.webp' },
      { type: 'image', src: '/projects/9/main/17.webp' },
      { type: 'image', src: '/projects/9/main/18.webp' },
      { type: 'image', src: '/projects/9/main/19.webp' },
      { type: 'image', src: '/projects/9/main/20.webp' },
      { type: 'image', src: '/projects/9/main/21.webp' },
    ],
  },
  {
    id: 10,
    type: 'UX' as const,
    order: 4,
    members: [
      { name: '김소은', classNumber: '2020111505' },
      { name: '문가희', classNumber: '2020111431' },
    ],
    name: 'Perful',
    description: `Your Perspective, Your Path to Fulfillment!

    Perful은 사용자가 자기 자신을 더 깊이 이해하고, 이를 통해 자연스러운 성장을 경험하도록 돕는 서비스입니다. 계획을 세우고 목표를 달성하는 과정을 함께 반복하며, 사용자와 지속적인 성장 여정을 함께 해보세요.`,
    teamName: '이인삼각',
    thumbnail: '/projects/10/thumbnail.webp',
    banner: ``,
    assets: [
      { type: 'image', src: '/projects/10/main/1.webp' },
      { type: 'video', src: '/projects/10/main/2.mp4' },
      { type: 'image', src: '/projects/10/main/3.webp' },
      { type: 'image', src: '/projects/10/main/4.webp' },
      { type: 'image', src: '/projects/10/main/5.webp' },
      { type: 'image', src: '/projects/10/main/6.webp' },
      { type: 'image', src: '/projects/10/main/7.webp' },
      { type: 'image', src: '/projects/10/main/8.webp' },
      { type: 'image', src: '/projects/10/main/9.webp' },
      { type: 'image', src: '/projects/10/main/10.webp' },
      { type: 'image', src: '/projects/10/main/11.webp' },
      { type: 'image', src: '/projects/10/main/12.webp' },
      { type: 'image', src: '/projects/10/main/13.webp' },
      { type: 'image', src: '/projects/10/main/14.webp' },
      { type: 'image', src: '/projects/10/main/15.webp' },
      { type: 'image', src: '/projects/10/main/16.webp' },
      { type: 'image', src: '/projects/10/main/17.webp' },
      { type: 'image', src: '/projects/10/main/18.webp' },
    ],
  },
  {
    id: 11,
    type: 'UX' as const,
    order: 5,
    members: [
      { name: '공성연', classNumber: '2020111233' },
      { name: '송의진', classNumber: '2019111266' },
      { name: '지예성', classNumber: '2021111450' },
      { name: '장윤서', classNumber: '2021111447' },
    ],
    name: 'Relait(릴레잇)',
    description: `우리는 다이어트, 운동, 공부 같은 목표를 자주 세우지만, 미루다 보면 시도조차 못 할 때가 많죠. 릴레잇은 이런 목표들을 혼자가 아닌 친구나 다른 사람들과 함께 릴레이 형식으로 실천할 수 있게 도와줍니다. 릴레잇과 함께 차근차근 목표를 달성해 보세요!

    We often set goals like dieting, exercising, and studying, but end up procrastinating and never trying. Relait helps you achieve these goals in a relay format with friends or others. Let Relait help you reach your goals step by step!
    `,
    teamName: '바톤땃쥐',
    thumbnail: '/projects/11/thumbnail.webp',
    banner: '/projects/11/banner.webp',
    assets: [{ type: 'image', src: '/projects/11/main/2.png' }],
  },

  // DF
  {
    id: 12,
    type: 'DF' as const,
    members: [{ name: '강지은', classNumber: '2020111419' }],
    name: 'Mugsip',
    description: `공간이 부족한 작은 원룸에 커피 머신과 같은 가전을 들이기에는 부담스럽고, 기존에 판매되는 휴대용 커피머신들보다는 좀 더 '실내' '1인 가구' 키워드에 초점이 맞추어져 있기를 원하는 사람들을 위해 제작된, 한 모금의 작은 휴식을 제공하는 미니 커피 머신 Mugsip입니다`,
    teamName: null,
    thumbnail: '/projects/12/thumbnail.webp',
    banner: '/projects/12/banner.webp',
    assets: [],
  },
  {
    id: 13,
    type: 'DF' as const,
    members: [{ name: '고경희', classNumber: '2020111421' }],
    name: 'Growith',
    teamName: null,
    thumbnail: ``,
    banner: ``,
    assets: [],
  },
  {
    id: 14,
    type: 'DF' as const,
    members: [{ name: '고은지', classNumber: '2020111423' }],
    name: 'looffit',
    description: `loopfit은 사용자가 시간 관리를 반복적으로 개선하며 점차 목표와
    실제 시간을 맞춰가는 IOT 타이머입니다.
    예상 시간과 실제 시간을 비교해 계획을 효율적으로 조정 할 수 있도
    록 도와주며, 직관적인 사용 경험을 제공합니다. 반복되는 일상 속
    loopfit과 함께 더 나은 일상의 균형을 찾아보세요.
    
    loopfit helps users iteratively improve their time management and gradually achieve their goals.
    It is an IOT timer as opposed to real time.
    You can adjust estimated and actual times to help you plan and respond.
    Located on a rock, it provides a flat user environment. Repetitive daily stories
    Find better symmetry in your daily life with loopfit.`,
    teamName: null,
    thumbnail: '/projects/14/thumbnail.webp',
    banner: '/projects/14/banner.webp',
    assets: [],
  },
  {
    id: 15,
    type: 'DF' as const,
    members: [{ name: '김소은', classNumber: '2019111419' }],
    name: 'FlexiLaser',
    description: `FlexiLaser는 휴대성과 간편함을 극대화한 접이식 레이저 키보드로, 기존 레이저 키보드가 가진 불편함과 사용환경의 제약을 개선했습니다.  
    언제 어디서나 자유롭게 사용할 수 있는 FlexiLaser로 효율적인 작업을 경험하세요.`,
    teamName: null,
    thumbnail: '/projects/15/thumbnail.webp',
    banner: '/projects/15/banner.webp',
    assets: [],
  },
  {
    id: 16,
    type: 'DF' as const,
    members: [{ name: '김소은', classNumber: '2020111505' }],
    name: 'steriC',
    description: `스마트폰 청결: 새로운 위생 패러다임
    
    Today, many people recognize the importance of handwashing; however, ironically, after washing their hands, they often touch their smartphones, compromising their cleanliness once again. Inspired by this, I designed a solution based on the idea that we need to extend hygiene management to smartphones as well.`,
    teamName: null,
    thumbnail: '/projects/16/thumbnail.webp',
    banner: '/projects/16/banner.webp',
    assets: [],
  },
  {
    id: 17,
    type: 'DF' as const,
    members: [{ name: '김지현', classNumber: '2021111430' }],
    name: 'Luminergy',
    description: `Luminergy는 무선으로 스마트 워치를 충전하며 착용할 수 있는 워치 보조배터리와 개폐식 자동 줄자 기능이 탑재된 핸드폰 보조배터리가 결합된 혁신적인 충전 키트입니다.

    Luminergy is an innovative charging kit that combines a wearable smartwatch battery that wirelessly charges your smartwatch and a portable battery for cell phones with a retractable automatic tape measure function.`,
    teamName: null,
    thumbnail: '/projects/17/thumbnail.webp',
    banner: '/projects/17/banner.webp',
    assets: [],
  },
  {
    id: 18,
    type: 'DF' as const,
    members: [{ name: '문가희', classNumber: '2020111431' }],
    name: 'Capstick',
    description: `매번 까먹게 되는 영양제를 제때 복용할 수 있도록 도와주는 맥세이프 영양제 리마인더

MagSafe nutritional reminder that helps you take nutritional supplements on time that you always forget.`,
    teamName: null,
    thumbnail: ``,
    banner: ``,
    assets: [],
  },
  {
    id: 19,
    type: 'DF' as const,
    members: [{ name: '박수연', classNumber: '2020111434' }],
    name: 'FOR∙REST',
    description: `수험생의 건강한 휴식을 위한, 스트레칭 타이머 시계입니다.
    많은 공부량으로 장시간 학습을 하는 수험생들이 효율적으로 시간을 관리하고 건강한 습관을 형성할 수 있도록 도와줍니다.

    This is a stretching timer clock designed for students to take healthy breaks.
    It helps students who study for long hours due to a large amount of study manage their time efficiently and develop healthy habits.`,
    teamName: null,
    thumbnail: ``,
    banner: ``,
    assets: [],
  },
  {
    id: 20,
    type: 'DF' as const,
    members: [{ name: '박은아', classNumber: '2020111435' }],
    name: 'pot-pot',
    description: ``,
    teamName: null,
    thumbnail: '/projects/20/thumbnail.webp',
    banner: '/projects/20/banner.webp',
    assets: [],
  },
  {
    id: 21,
    type: 'DF' as const,
    members: [{ name: '박이은', classNumber: '2021120105' }],
    name: 'FlipGrip',
    description: ``,
    teamName: null,
    thumbnail: ``,
    banner: ``,
    assets: [],
  },
  {
    id: 22,
    type: 'DF' as const,
    members: [{ name: '반유진', classNumber: '2021111438' }],
    name: 'Redpoint',
    description: ``,
    teamName: null,
    thumbnail: '/projects/22/thumbnail.webp',
    banner: '/projects/22/banner.webp',
    assets: [],
  },
  {
    id: 23,
    type: 'DF' as const,
    members: [{ name: '우규리', classNumber: '2020111442' }],
    name: 'Boundi',
    description: ``,
    teamName: null,
    thumbnail: '/projects/23/thumbnail.webp',
    banner: '/projects/23/banner.webp',
    assets: [],
  },
  {
    id: 24,
    type: 'DF' as const,
    members: [{ name: '유주하', classNumber: '2021111443' }],
    name: 'GRIP',
    description: ``,
    teamName: null,
    thumbnail: ``,
    banner: ``,
    assets: [],
  },
  {
    id: 25,
    type: 'DF' as const,
    members: [{ name: '윤주하', classNumber: '2018111439' }],
    name: 'toaxter',
    description: ``,
    teamName: null,
    thumbnail: '/projects/25/thumbnail.webp',
    banner: '/projects/25/banner.webp',
    assets: [],
  },
  {
    id: 26,
    type: 'DF' as const,
    members: [{ name: '이가연', classNumber: '2020111444' }],
    name: 'BUFFLER',
    description: ``,
    teamName: null,
    thumbnail: '/projects/26/thumbnail.webp',
    banner: '/projects/26/banner.webp',
    assets: [],
  },
  {
    id: 27,
    type: 'DF' as const,
    members: [{ name: '이서영', classNumber: '2020111445' }],
    name: 'FLIP BOTTLE',
    description: ``,
    teamName: null,
    thumbnail: ``,
    banner: '/projects/27/banner.webp',
    assets: [],
  },
  {
    id: 28,
    type: 'DF' as const,
    members: [{ name: '이소연', classNumber: '2020111446' }],
    name: 'FLOMO',
    description: ``,
    teamName: null,
    thumbnail: '/projects/28/thumbnail.webp',
    banner: '/projects/28/banner.webp',
    assets: [],
  },
  {
    id: 29,
    type: 'DF' as const,
    members: [{ name: '이지은', classNumber: '2020111448' }],
    name: '팁탭',
    description: ``,
    teamName: null,
    thumbnail: '/projects/29/thumbnail.webp',
    banner: '/projects/29/banner.webp',
    assets: [],
  },
  {
    id: 30,
    type: 'DF' as const,
    members: [{ name: '장윤서', classNumber: '2021111447' }],
    name: 'WipClean',
    description: ``,
    teamName: null,
    thumbnail: '/projects/30/thumbnail.webp',
    banner: '/projects/30/banner.webp',
    assets: [],
  },
  {
    id: 31,
    type: 'DF' as const,
    members: [{ name: '전예지', classNumber: '2021120106' }],
    name: 'PUSHME',
    description: ``,
    teamName: null,
    thumbnail: ``,
    banner: ``,
    assets: [],
  },
  {
    id: 32,
    type: 'DF' as const,
    members: [{ name: '정가윤', classNumber: '2021111448' }],
    name: 'TICK+OCK',
    description: ``,
    teamName: null,
    thumbnail: '/projects/32/thumbnail.webp',
    banner: '/projects/32/banner.webp',
    assets: [],
  },
  {
    id: 33,
    type: 'DF' as const,
    members: [{ name: '조수민', classNumber: '2020111454' }],
    name: 'Unplug',
    description: ``,
    teamName: null,
    thumbnail: ``,
    banner: ``,
    assets: [],
  },
  {
    id: 34,
    type: 'DF' as const,
    members: [{ name: '조수빈', classNumber: '2020111455' }],
    name: 'OPEN UP',
    description: ``,
    teamName: null,
    thumbnail: '/projects/34/thumbnail.webp',
    banner: '/projects/34/banner.webp',
    assets: [],
  },
  {
    id: 35,
    type: 'DF' as const,
    members: [{ name: '지예성', classNumber: '2021111450' }],
    name: 'PUMPPY',
    description: ``,
    teamName: null,
    thumbnail: '/projects/35/thumbnail.webp',
    banner: ``,
    assets: [],
  },
  {
    id: 36,
    type: 'DF' as const,
    members: [{ name: '홍수정', classNumber: '2020111458' }],
    name: 'Fruzii',
    description: ``,
    teamName: null,
    thumbnail: ``,
    banner: '/projects/36/banner.webp',
    assets: [],
  },
  {
    id: 37,
    type: 'DF' as const,
    members: [{ name: '황예린', classNumber: '2021111456' }],
    name: 'PhoRella',
    description: ``,
    teamName: null,
    thumbnail: ``,
    banner: ``,
    assets: [],
  },

  // BX
  {
    id: 38,
    type: 'BX' as const,
    order: 4,
    members: [
      { name: '김유진', classNumber: '2020111425' },
      { name: '정예승', classNumber: '2020111526' },
      { name: '허찬비', classNumber: '2019111457' },
    ],
    name: '유어예',
    description: `유어예(游於藝)는 디지털 콘텐츠에 기반한 취미 활동을 경계하고
    더 나은 여가를 원하는 현대인들을 위한 아트 플로우 빌리지입니다.
    
    모두에게 열린 공간인 유어예는
    예측 불가능한 사회에서 벗어나 예술과 자연에 노니는 시간을 선사합니다.`,
    teamName: null,
    thumbnail: '/projects/38/thumbnail.webp',
    banner: '/projects/38/banner.webp',
    assets: [],
  },
  {
    id: 39,
    type: 'BX' as const,
    order: 3,
    members: [
      { name: '김채원', classNumber: '2020111427' },
      { name: '이지은', classNumber: '2020111447' },
    ],
    name: '희피당',
    description: `빠르게 변화하는 시대 가운데 한국의 전통에도 많은 변화가 일어나고 있습니다. 따라서 K-Culture를 K-Postmodern Culture에 맞춰 재해석한 공간을 기획했습니다.
    희피당에서 단조로움과 정형화에서 벗어나 과거와 현재가 공존하는 새로운 K-Culture를 만나보세요.`,
    teamName: null,
    thumbnail: '/projects/39/thumbnail.webp',
    banner: '/projects/39/banner.webp',
    assets: [],
  },
  {
    id: 40,
    type: 'BX' as const,
    order: 1,
    members: [
      { name: '박인애', classNumber: '2020111436' },
      { name: '정다은', classNumber: '2021111449' },
    ],
    name: '넷필리온',
    description: `NETPILION은 콘텐츠를 통해 사람들을 연결하고, 영감을 불어넣는 넷플릭스만의 독창적인 공간입니다.
    우리는 좋은 콘텐츠가 사람들에게 깊은 영향을 미친다고 믿으며, 다양한 문화적 경험을 제공하는 
    넷플릭스 파빌리온을 구축했습니다.

    NETPILION is Netflix's unique space to connect and inspire people through content.
    We believe that good content deeply affects people, and we have built a
    Netflix Pavilion that offers a variety of cultural experiences.`,
    teamName: null,
    thumbnail: '/projects/40/thumbnail.webp',
    banner: '/projects/40/banner.webp',
    assets: [],
  },
  {
    id: 41,
    type: 'BX' as const,
    order: 2,
    members: [
      { name: '이수현', classNumber: '2018110956' },
      { name: '오유진', classNumber: '2020111440' },
    ],
    name: 'GG 3.5',
    description: `Green Gourmet 3.5는 ‘3.5%의 행동이 사회를 변화시킨다’는
    법칙에서 비롯된 풀무원만의 비건 미식 공간입니다.
    
    단순한 식당을 넘어, 환경에 대한 책임감을 느끼고 지속가능한
    선택을 일상 속에서 실천할 수 있도록 디자인되었습니다.`,
    teamName: null,
    thumbnail: '/projects/41/thumbnail.webp',
    banner: '/projects/41/banner.webp',
    assets: [],
  },
]
