import React from 'react'
import Head from 'next/head'

// Local
import { Space } from '../shared/Space'
import { PageHeader } from '../shared/PageHeader'
import { Artwork } from '../sponsors/Artwork'
import { Companies } from '../sponsors/Companies'
import { Organizers } from '../shared/Organizers'
import { Subscribe } from '../shared/Subscribe'
import { Footer } from '../shared/Footer'

export default () => (
  <>
    <Head>
      <title>Sponsors - GraphQL Conf</title>
      <meta name="twitter:title" content="Sponsors - GraphQL Conf Berlin 2019" />
    </Head>

    <PageHeader title="Sponsors" artwork={<Artwork />} />

    <Space height={80} heightOnMobile={48} />

    <Companies />

    <Space height={105} heightOnMobile={100} />

    <Subscribe />

    <Space height={134} heightOnMobile={100} />

    <Organizers />

    <Space height={114} heightOnMobile={90} />

    <Footer />
  </>
)
