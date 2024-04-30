<App>
    return (
        <div className="component-app">
            <Display value={this.state.next || this.state.total || "0"} />
            <ButtonPanel clickHandler={this.handleClick} />
        </div>
        );
</App>