import React from 'react'
import {
  FeedSummary,
  FeedLabel,
  FeedEvent,
  FeedDate,
  FeedContent,
  CardHeader,
  CardContent,
  Card,
  Feed,
} from 'semantic-ui-react'

const img1 = 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'

const img2 = 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'

const img3 = 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'


const Dentistas = () => (
  <Card>
    <CardContent>
      <CardHeader>Recent Activity</CardHeader>
    </CardContent>
    <CardContent>
      <Feed>
        <FeedEvent>
          <FeedLabel image={img1} />
          <FeedContent>
            <FeedDate content='1 day ago' />
            <FeedSummary>
              You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            </FeedSummary>
          </FeedContent>
        </FeedEvent>

        <FeedEvent>
          <FeedLabel image={img2}  />
          <FeedContent>
            <FeedDate content='3 days ago' />
            <FeedSummary>
              You added <a>Molly Malone</a> as a friend.
            </FeedSummary>
          </FeedContent>
        </FeedEvent>

        <FeedEvent>
          <FeedLabel image={img3}  />
          <FeedContent>
            <FeedDate content='4 days ago' />
            <FeedSummary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </FeedSummary>
          </FeedContent>
        </FeedEvent>
      </Feed>
    </CardContent>
  </Card>
)

export default Dentistas