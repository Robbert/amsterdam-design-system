/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Grid, Heading, Link, MegaMenu, Screen, UnorderedList } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Navigation/Mega Menu',
  component: MegaMenu,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <Screen>
        <Story />
      </Screen>
    ),
  ],
} satisfies Meta<typeof MegaMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Grid key="nav" paddingVertical="medium">
        <Grid.Cell span="all">
          <Heading level={1} size="level-2">
            Alle onderwerpen
          </Heading>
          <MegaMenu.ListCategory>
            <UnorderedList markers={false}>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Afval
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Bestuur en organisatie
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Bouw- en verkeersprojecten
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Burgerzaken
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Diversiteit
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Gemeentebelastingen
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Gezondheidsdienst (GGD)
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Kunst en cultuur
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Ondernemen
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Onderwijs en jeugd
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Parkeren
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Sport
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Stadsdelen
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Subsidies
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Vacatures
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Verkeer en vervoer
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Vrije tijd
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Werk aan de weg
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Werk en inkomen
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Wonen en leefomgeving
                </Link>
              </UnorderedList.Item>
            </UnorderedList>
          </MegaMenu.ListCategory>
        </Grid.Cell>
      </Grid>
    ),
  },
}

export const MultipleCategories: Story = {
  args: {
    children: (
      <Grid key="nav" paddingVertical="medium">
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 8 }}>
          <Heading level={3} size="level-3">
            Thema&rsquo;s
          </Heading>
          <MegaMenu.ListCategory>
            <UnorderedList markers={false}>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Afval
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Bestuur en organisatie
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Bouw- en verkeersprojecten
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Burgerzaken
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Diversiteit
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Gemeentebelastingen
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Gezondheidsdienst (GGD)
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Kunst en cultuur
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Ondernemen
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Onderwijs en jeugd
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Parkeren
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Sport
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Stadsdelen
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Subsidies
                </Link>
              </UnorderedList.Item>
            </UnorderedList>
          </MegaMenu.ListCategory>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 4 }}>
          <Heading level={3} size="level-3">
            Categorieën
          </Heading>
          <MegaMenu.ListCategory>
            <UnorderedList markers={false}>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Vacatures
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Verkeer en vervoer
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Vrije tijd
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Werk aan de weg
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Werk en inkomen
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Wonen en leefomgeving
                </Link>
              </UnorderedList.Item>
            </UnorderedList>
          </MegaMenu.ListCategory>
          <Heading level={3} size="level-3">
            Snel naar
          </Heading>
          <MegaMenu.ListCategory>
            <UnorderedList markers={false}>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Vacatures
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Verkeer en vervoer
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Vrije tijd
                </Link>
              </UnorderedList.Item>
              <UnorderedList.Item>
                <Link variant="inList" href="#">
                  Werk aan de weg
                </Link>
              </UnorderedList.Item>
            </UnorderedList>
          </MegaMenu.ListCategory>
        </Grid.Cell>
      </Grid>
    ),
  },
}