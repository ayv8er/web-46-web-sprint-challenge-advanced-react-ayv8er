# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
   Stateful components do all the non visual things such as updating and manipulating state. They are the cogwheels in the inside of the machine. Functional components often do the visual things such as rendering or updating displays based on the stateful components.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
   componentWillMount will be called once and only once after the first render.
   componentWillUpdate will be called every time after a re-render.

3. Define stateful logic.
   Any logic that updates, manipulates or handles state.

4. What are the three step of creating a successful test? What is done in each phase?
   Arrange - Set up what's needed for the test.
   Act - Actually do the things the test requires for a result.
   Assert - Check to see if the expected results have occurred.
