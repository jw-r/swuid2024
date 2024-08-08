import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string
}

const Section = ({ title, className, children }: Props) => {
  return (
    <div className={className}>
      <section>
        <h2 className="text-headline-01 lg:text-web-headline-01 text-primary-02">{title}</h2>
        {children}
      </section>
    </div>
  )
}

export default Section
