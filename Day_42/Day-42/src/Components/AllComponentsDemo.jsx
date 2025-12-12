// Demo file showing how to use all components
// You can import and use this in App.jsx to see all components in action

import HelloStudent from './1_HelloStudent';
import StudentWithProps from './2_StudentWithProps';
import Message from './3_Message';
import Button from './4_Button';
import Card from './5_Card';
import ProfileCard from './6_ProfileCard';
import ReusableButton from './7_ReusableButton';
import ProductItem from './8_ProductItem';
import Layout from './9_Layout';
import MultiComponentPage from './10_MultiComponentPage';

function AllComponentsDemo() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>All Components Demo</h1>
      
      <section style={{ marginBottom: '40px', padding: '20px', border: '2px solid #ddd' }}>
        <h2>Task 1: HelloStudent</h2>
        <HelloStudent />
      </section>

      <section style={{ marginBottom: '40px', padding: '20px', border: '2px solid #ddd' }}>
        <h2>Task 2: StudentWithProps</h2>
        <StudentWithProps name="Alice" age={20} />
        <StudentWithProps name="Bob" age={22} />
      </section>

      <section style={{ marginBottom: '40px', padding: '20px', border: '2px solid #ddd' }}>
        <h2>Task 3: Message</h2>
        <Message message="Welcome to React Components!" />
        <Message message="This is another message." />
      </section>

      <section style={{ marginBottom: '40px', padding: '20px', border: '2px solid #ddd' }}>
        <h2>Task 4: Button</h2>
        <Button text="Click Me" />
        <Button text="Submit" />
      </section>

      <section style={{ marginBottom: '40px', padding: '20px', border: '2px solid #ddd' }}>
        <h2>Task 5: Card with Children</h2>
        <Card>
          <h3>Card Title</h3>
          <p>This content is passed as children prop!</p>
          <p>You can put anything inside the Card.</p>
        </Card>
        <Card>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Card>
      </section>

      <section style={{ marginBottom: '40px', padding: '20px', border: '2px solid #ddd' }}>
        <h2>Task 6: ProfileCard</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <ProfileCard 
            name="Praveen D" 
            job="Web Developer" 
            avatar="https://via.placeholder.com/100" 
          />
          <ProfileCard 
            name="Jagadeesh" 
            job="UI Designer" 
            avatar="https://via.placeholder.com/100" 
          />
        </div>
      </section>

      <section style={{ marginBottom: '40px', padding: '20px', border: '2px solid #ddd' }}>
        <h2>Task 7: ReusableButton</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <ReusableButton color="blue" size="small" text="Small Blue" />
          <ReusableButton color="green" size="medium" text="Medium Green" />
          <ReusableButton color="red" size="large" text="Large Red" />
          <ReusableButton color="purple" size="medium" text="Purple Button" />
        </div>
      </section>

      <section style={{ marginBottom: '40px', padding: '20px', border: '2px solid #ddd' }}>
        <h2>Task 8: ProductItem</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <ProductItem title="Laptop" price={999} />
          <ProductItem title="Mouse" price={25} />
          <ProductItem title="Keyboard" price={75} />
        </div>
      </section>

      <section style={{ marginBottom: '40px', padding: '20px', border: '2px solid #ddd' }}>
        <h2>Task 9: Layout</h2>
        <Layout>
          <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
            <h3>Content inside Layout</h3>
            <p>This content is passed as children to the Layout component.</p>
          </div>
        </Layout>
      </section>

      <section style={{ marginBottom: '40px', padding: '20px', border: '2px solid #ddd' }}>
        <h2>Task 10: MultiComponentPage</h2>
        <MultiComponentPage />
      </section>
    </div>
  );
}

export default AllComponentsDemo;


