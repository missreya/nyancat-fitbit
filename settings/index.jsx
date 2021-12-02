function mySettings(props) {
    
  return (
    <Page>
      <Section
        title="Background Color">
        <ColorSelect
          settingsKey="myColor"
          colors={[
            {color: '#013368'},
            {color: 'black'},
          ]}
       />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);