import Link from 'next/link'
import Text from './ui/text'

const Footer = () => {
  return (
    <footer className="py-[42px] text-center desktop:py-[105px]">
      <Text typography="Caption_01">
        Copyright© Industrial Design,Seoul Women’s University,
        <br />
        All rights reserved 서울여자대학교 미래산업융합대학 <br className="desktop:hidden" />
        서울시 노원구 화랑로 621
      </Text>
      <Text typography="Caption_01" className="text-primary-02">
        <a href="" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>{' '}
        |{' '}
        <a href="" target="_blank" rel="noopener noreferrer">
          Behence
        </a>{' '}
        |{' '}
        <a href="" target="_blank" rel="noopener noreferrer">
          Notefolio
        </a>
      </Text>
    </footer>
  )
}

export default Footer
